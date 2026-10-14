import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import formidable from "formidable";
import { readFile } from "node:fs/promises";
import { z } from "zod";

// Necesario para que Vercel no intente parsear el multipart por su cuenta
export const config = { api: { bodyParser: false } };

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel limita el body a 4.5 MB

const schema = z.object({
    nombre: z.string().trim().min(1).max(100),
    empresa: z.string().trim().max(100).default(""),
    telefono: z.string().trim().min(1).max(15),
    email: z.string().trim().email(),
    presupuesto: z.string().trim().max(20).default(""),
    cronograma: z.string().trim().max(100).default(""),
    message: z.string().trim().max(2000).default(""),
    nosotros: z.string().trim().max(100).default(""),
});

const escapeHtml = (s: string) =>
    s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

const timestamp = () => {
    const [d, t] = new Date().toISOString().slice(0, 19).split("T");
    return `${d.replace(/-/g, "")}-${t.replace(/:/g, "")}`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log("Request:", req);

    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "Método no permitido" });
    }

    try {
        const form = formidable({
            maxFileSize: MAX_FILE_BYTES,
            maxFiles: 1,
            allowEmptyFiles: false,
        });

        const [rawFields, files] = await form.parse(req);

        // formidable v3 devuelve cada campo como array
        const fields = Object.fromEntries(
            Object.entries(rawFields).map(([k, v]) => [k, v?.[0] ?? ""])
        );

        const parsed = schema.safeParse(fields);
        if (!parsed.success) {
            return res.status(422).json({
                ok: false,
                errors: parsed.error.flatten().fieldErrors,
            });
        }
        const data = parsed.data;

        const attachments: { filename: string; content: Buffer }[] = [];
        const file = files.file?.[0];

        if (file) {
            const buffer = await readFile(file.filepath);

            // Validar que realmente sea un PDF (firma "%PDF")
            if (buffer.subarray(0, 4).toString() !== "%PDF") {
                return res
                    .status(422)
                    .json({ ok: false, errors: { file: ["Solo se permiten archivos PDF"] } });
            }

            attachments.push({
                filename: file.originalFilename ?? "archivo.pdf",
                content: buffer,
            });
        }

        const { error } = await resend.emails.send({
            from: "Cotizaciones <onboarding@resend.dev>",
            to: process.env.MAIL_TO ?? "ocarita25@gmail.com",
            replyTo: data.email,
            subject: `Cotización - ${data.nombre} - ${timestamp()}`,
            html: `
        <p><strong>Contacto:</strong> ${escapeHtml(data.nombre)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(data.empresa)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(data.telefono)}</p>
        <p><strong>Presupuesto:</strong> ${escapeHtml(data.presupuesto)}</p>
        <p><strong>Cronograma:</strong> ${escapeHtml(data.cronograma)}</p>
        <p><strong>Nos encontró por:</strong> ${escapeHtml(data.nosotros)}</p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
            attachments,
        });

        if (error) {
            console.error("Resend error:", error);
            return res.status(502).json({ ok: false, error: "No se pudo enviar el correo" });
        }

        return res.status(200).json({ ok: true });
    } catch (err: any) {
        // formidable lanza código 1009 cuando se supera maxFileSize
        if (err?.code === 1009) {
            return res
                .status(413)
                .json({ ok: false, error: "El PDF supera el tamaño máximo de 4 MB" });
        }
        console.error(err);
        return res.status(500).json({ ok: false, error: "Error interno" });
    }
}
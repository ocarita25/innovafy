import { testimonies } from "@/data/testimonies";
import type { TestimoniesTypes } from "@/types/TestimoniesType.types";

export function getTestimoniesByService(service: string): TestimoniesTypes[] {
    return testimonies.filter(t => t.services.includes(service));
}
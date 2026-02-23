export function splitIntoChunks<T>(array: T[], chunks: number): T[][] {
    const size = Math.ceil(array.length / chunks)
    return Array.from({ length: chunks }, (_, i) => array.slice(i * size, (i + 1) * size))
}
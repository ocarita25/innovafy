export function splitIntoChunks<T>(array: T[], chunks: number): T[][] {
    const baseSize = Math.floor(array.length / chunks)
    const remainder = array.length % chunks

    const result: T[][] = []
    let start = 0

    for (let i = 0; i < chunks; i++) {
        const extra = i < remainder ? 1 : 0
        const size = baseSize + extra

        result.push(array.slice(start, start + size))
        start += size
    }

    return result
}
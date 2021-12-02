import { readInput } from '../utils'

const depths = readInput('day1.in').map((entry) => Number(entry))

export const part1 = () => {
    let nIncreases = -1
    let previous = 0
    for (const d of depths) {
        if (d > previous) {
            nIncreases++
        }
        previous = d
    }

    return nIncreases
}

export const part2 = () => {
    const windowSize = 3
    let nIncreases = -1
    let previousWindow = 0

    let i = 0; let j = windowSize
    while (j <= depths.length) {
        const windowSum = depths.slice(i, j).reduce((a,b) => a + b)
        if (windowSum > previousWindow) 
            nIncreases++
        previousWindow = windowSum
        i++; j++
    }

    return nIncreases
}
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
    const arr = readInput('day1.in').map((entry) => Number(entry))

}
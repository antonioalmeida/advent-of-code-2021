import { range, readInput } from '../utils'

const crabs = readInput('day7.in', ',').map((s) => parseInt(s))

export const part1 = () => {
    crabs.sort((a,b) => a-b)
    const median = crabs[crabs.length/2]
    return crabs.map((b) => Math.abs(b-median)).reduce((c,d) => c+d)
}

export const part2 = () => {

}
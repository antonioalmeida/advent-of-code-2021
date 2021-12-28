import { range, readInput } from "../utils"

const crabs: number[] = readInput("day7.in", ",").map((s) => parseInt(s))

export const part1 = () => {
  crabs.sort((a, b) => a - b)
  const median = crabs[crabs.length / 2]
  return crabs.map((b) => Math.abs(b - median)).reduce((c, d) => c + d)
}

export const part2 = () => {
  crabs.sort((a, b) => a - b)
  const min = crabs[0]
  const max = crabs[crabs.length-1]

  const fuels: number[] = []

  range(min, max).forEach((position) => {
      const fuel = crabs.map(c => termial(Math.abs(position-c))).reduce((a,b) => a+b)
      fuels.push(fuel)      
  })

  fuels.sort((a,b) => a-b)
  return fuels[0]
}

/**
 *
 * @param n
 * @returns termial sum of n (1 + 2 + 3 + ... + n)
 */
const termial = (n) => (n*n + n) / 2

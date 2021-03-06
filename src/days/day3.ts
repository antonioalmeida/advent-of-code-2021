import { readInput } from '../utils'

const report = readInput('day3.in')
 
export const part1 = () => {
    let gamma = ''
    let i = -1, j = -1 

    while (++i < report[0].length) {
        let colSum = 0
        while(++j < report.length)
            colSum += Number(report[j][i])
        gamma += colSum >= (report.length / 2) ? '1' : '0'
        j = 0
    }

    const epsilon = gamma.split('').map((b) => b == '1' ? '0' : '1').join('')

    const decimalGamma = parseInt(gamma, 2)
    const decimalEpsilon = parseInt(epsilon, 2)
    return decimalGamma * decimalEpsilon
}

const getRating = (report, bitCriteria: (a: number, b: number) => string ) => {
    let i = -1, j = -1 
    let relevant = report
    while (relevant.length > 1 && ++i < relevant[0].length) {
        let colSum = 0;
        while (++j < relevant.length)
            colSum += Number(relevant[j][i]);
        const target = bitCriteria(colSum, relevant.length)

        relevant = relevant.filter((row) => row[i] == target)
        j = -1;
    }

    return parseInt(relevant, 2)
}

export const part2 = () => {
    const oxygen = getRating(report, ((sum, size) => sum >= size / 2 ? "1" : "0"))
    const co2 = getRating(report, ((sum, size) => sum >= size / 2 ? "0" : "1"))

    return oxygen * co2
}
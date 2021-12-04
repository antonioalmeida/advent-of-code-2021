import { readInput } from '../utils'

const report = readInput('day3.in')
 
export const part1 = () => {
    let gamma = '';
    let i = -1; let j = -1;

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

export const part2 = () => {

}
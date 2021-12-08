import { readInput } from '../utils'

const input = readInput('day5.in')

const vents = input.map((line) => line.split(' -> ')
    .map((s) => {
        const [x,y] = s.split(',')
        return {x: parseInt(x), y: parseInt(y)}
    })
    .flat())

const vecDif = (a, b) => ({ x: (b.x - a.x), y: (b.y - a.y) })
const vecSum = (a, b) => ({ x: (b.x + a.x), y: (b.y + a.y) })
const vecDiv = (a, scalar) => ({ x: (a.x / scalar), y: (a.y / scalar) })
const vecEqual = (a, b) => ((a.x == b.x) && (a.y == b.y))
const vecMag = ({ x, y }) => (Math.sqrt(x**2 + y**2))

export const part1 = () => {
    const matrix = {}

    vents.forEach(([v1, v2]) => {
        const diff = vecDif(v1, v2)
        if (diff.x != 0 && diff.y != 0) return
        
        const dirVec = vecDiv(diff, vecMag(diff))

        let index: string
        while (!vecEqual(v1, v2)) {
            index = JSON.stringify(v1)
            if(!matrix[index]) matrix[index] = 1
            else matrix[index]++
            v1 = vecSum(v1, dirVec)
        } 

        index = JSON.stringify(v1)
        if(!matrix[index]) matrix[index] = 1
        else matrix[index]++
    })

    return Object.values(matrix).filter(a => a > 1).reduce((a: number, b: number) => a+1,0)
}

export const part2 = () => {
    const matrix = {}

    vents.forEach(([v1, v2]) => {
        const diff = vecDif(v1, v2)
        
        const { x, y } = vecDiv(diff, vecMag(diff))
        const dirVec = { x: Math.round(x), y: Math.round(y)}

        let index: string
        while (!vecEqual(v1, v2)) {
            index = JSON.stringify(v1)
            if(!matrix[index]) matrix[index] = 1
            else matrix[index]++
            v1 = vecSum(v1, dirVec)
        } 

        index = JSON.stringify(v1)
        if(!matrix[index]) matrix[index] = 1
        else matrix[index]++
    })

    return Object.values(matrix).filter(a => a > 1).reduce((a: number, b: number) => a+1,0)
}
import { readInput } from '../utils'

const commands = readInput('day2.in').map((entry) => {
    const [direction, amount] = entry.split(' ')
    return { direction, amount } 
})
 
const ops = {
    'up':      (n) => (x,y) => [Number(x),Number(y)-Number(n)],
    'forward': (n) => (x,y) => [Number(x)+Number(n),Number(y)],
    'down':    (n) => (x,y) => [Number(x),Number(y)+Number(n)],
}

export const part1 = () => {
    let x = 0
    let y = 0

    for (const {direction, amount} of commands) {
        const op = ops[direction](amount);
        [x,y] = op(x,y)
    }

    return x*y
}


export const part2 = () => {
    
}
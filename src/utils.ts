import fs from 'fs'

const BASE_DIR = 'inputs'

export const readInput = (filename: string, separator: string = '\n') => {
    return fs.readFileSync(`${BASE_DIR}/${filename}`).toString().split(separator)
}

export const transpose = m => m[0].map((x,i) => m.map(x => x[i]))

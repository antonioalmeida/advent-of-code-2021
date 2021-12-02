import * as days from './days'

//const days = { day1 } 

import yargs from 'yargs' 
import { hideBin } from 'yargs/helpers'

export const runProblem = (day: string, part: string) => {
    const problem = `days.day${day}.part${part}`
    console.log('Running', problem)
    // tslint:disable-next-line: no-eval
    if (typeof eval(`${problem}`) === 'function') {
        const t0 = Date.now()
        // tslint:disable-next-line: no-eval
        const result = eval(`${problem}()`)
        console.log('Result:', result)
        const t1 = Date.now()
        console.log(`Time: ${(t1 - t0)}ms.`)
    }
    else
      console.log('No such problem!')
}

const argv = yargs(hideBin(process.argv)).argv
const day: any = argv.day
const part: any = argv.part

if (parseInt(day) > Object.keys(days).length || parseInt(day) < 0)
    console.log('Invalid day:', argv.day)

runProblem(day, part)



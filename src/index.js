import Draftlog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import database from './../database.json'


Draftlog(console).addLineListener(process.stdin)

const options = {
    leftPad: 2,
    columns: [
        {field: 'id', name: chalk.bgCyanBright('ID')},
        {field: 'vehicles', name: chalk.bgMagentaBright('Vehicles')},
        {field: 'kmTraveled', name: chalk.bgGreenBright('Km Traveled')},
        {field: 'from', name: chalk.bgBlueBright('From')},
        {field: 'to', name: chalk.bgYellowBright('To')},
    ]
}

const table = chalkTable(options, database)
const print = console.draft(table)

setInterval(()=>{
    database.push({id: Date.now(), vehicles: ['Test '+Date.now()]})
    const table = chalkTable(options, database)
    print (table)
}, 400);
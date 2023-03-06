import Draftlog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import database from './../database.json'
import readline from 'readline'
import Person from './person.js'

const DEFAULT_LANG = 'pt-br'
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

const table = chalkTable(options, database.map(item => new Person(item).formatted()))
const print = console.draft(table)

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Qual eh o seu nome?', msg =>{
    console.log('msg', msg.toString())
})
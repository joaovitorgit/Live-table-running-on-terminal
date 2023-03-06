import Draftlog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import readline from 'readline'
import Person from './person.js'
import { resolve } from 'path'

export default class TerminalController{
    constructor(){
        this.print = {}
        this.data = {}
    }

    initializeTerminal(database, language){
        Draftlog(console).addLineListener(process.stdin)
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        this.initializeTable(database, language)
    }

    initializeTable(database, language){
        const data = database.map(item => new Person(item).formatted(language))
        const table = chalkTable(this.getTableOptions(), data)
        this.print = console.draft(table)
        this.data = data
        
    }

    question(msg = ''){
        return new Promise(resolve => this.terminal.question(msg, resolve)  )
        
    }

    closeTerminal(){
        this.terminal.close()
    }

    getTableOptions(){
        return {
            leftPad: 2,
            columns: [
                {field: 'id', name: chalk.bgCyanBright('ID')},
                {field: 'vehicles', name: chalk.bgMagentaBright('Vehicles')},
                {field: 'kmTraveled', name: chalk.bgGreenBright('Km Traveled')},
                {field: 'from', name: chalk.bgBlueBright('From')},
                {field: 'to', name: chalk.bgYellowBright('To')},
            ]
        }
    }
}
import Draftlog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import database from './../database.json'
import readline from 'readline'
import Person from './person.js'
import TerminalController from './terminalController.js'

const DEFAULT_LANG = 'pt-br'
const STOP_TERMINAL = ':stop'
const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANG)

async function mainLoop(){
    try {
        const answer  = await terminalController.question('What?')
        if(answer === STOP_TERMINAL){
            terminalController.closeTerminal()
            console.log('Process finished!')
        }

        const person = Person.generateInstanceFromString(answer)
        console.log(person.formatted(DEFAULT_LANG))
        return mainLoop()

        
    } catch (error) {
        console.error('Error:', error)
        return mainLoop()
    }
}


await mainLoop()






import mocha from 'mocha'
const { describe, it} = mocha
import chai, { should } from 'chai'
const {expect} = chai
import Person from './../src/person.js'

describe('Person', ()=>{
    it('Should return a person instance from a string', ()=>{
        const person = Person.generateInstanceFromString(
            '1 Bike,Moto 100000 2020-01-01 2020-02-01'
        )

        const expected = {
            from: '2020-01-01',
            to:'2020-02-01',
            vehicles: ['Bike','Moto'],
            kmTraveled:'100000',
            id:'1'
        }

        expect(person).to.be.deep.equal(expected)
    })

    it('Should Format values', ()=>{
        const person = new Person({
            from: '2020-01-01 ',
            to:'2020-02-01',
            vehicles: ['Bike','Moto'],
            kmTravaled:'100000',
            id:'1'
        })

        const result = person.formatted('pt-br');

        const expected = {
            id: 1,
            vehicles: 'Bike e Moto',
            kmTraveled: 'NaN km',
            from: '01 de janeiro de 2020',
            to: '01 de fevereiro de 2020'
        }

        expect(result).to.be.deep.equal(expected)
    })
})

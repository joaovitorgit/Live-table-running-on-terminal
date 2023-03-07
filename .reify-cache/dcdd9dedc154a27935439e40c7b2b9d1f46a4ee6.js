"use strict";var mocha;module.link('mocha',{default(v){mocha=v}},0);var chai,should;module.link('chai',{default(v){chai=v},should(v){should=v}},1);var Person;module.link('./../src/person.js',{default(v){Person=v}},2);
const { describe, it} = mocha

const {expect} = chai


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

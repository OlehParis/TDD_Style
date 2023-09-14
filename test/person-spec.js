const { expect } = require('chai')
const Person = require("../problems/person")
//------------------------------------------------------------------------------------

describe('Person Class', () =>
{
    it('Create a Person class', () =>
    {
        expect(Person).to.not.be.null
    });
    it('Constructor should take name and age properties', () =>
    {
        const person = new Person('Tameka', 18)
        expect(person).to.be.an.instanceOf(Person)
        expect(person).to.be.property('name', 'Tameka')
        expect(person).to.be.property('age', 18)
    });
    it('Should create an instance Method: sayHello, that returns a greeting string with the name property', () =>
    {
        const person = new Person('Tameka', 18)
        expect(person.sayHello()).to.be.deep.equal('Hello Tameka')
    });
    it('Should create an instance Method: visit, that takes in otherPerson as arg and returns another person visting the passed-in person instance', () =>
    {
        const person1 = new Person('Oleh', 20)
        const person2 = new Person('Tameka', 18)
        expect(person1.visit(person2)).to.be.deep.equal('Oleh visited Tameka')
    });
    it('Should create an instance Method: switchVisit, that invokes the visit method of the parameter (otherPerson), passing the current instances as the arg', () =>
    {
        const person1 = new Person('Oleh', 20)
        const person2 = new Person('Tameka', 18)
        expect(person1.switchVisit(person2)).to.be.deep.equal('Tameka visited Oleh')
    });
    it('Should create an instance Method: update, passing the object as the arg. Should return true is object is valid', () =>
    {
        const person = new Person('Oleh', 20)
        const res = person.update('invalid')

        expect(res).to.be.false

        
    });
})

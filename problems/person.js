class Person {
  constructor(name, age)
  {
    this.name = name
    this.age = age
  }

  sayHello = () => `Hello ${this.name}`

  visit = otherPerson => `${this.name} visited ${otherPerson.name}`

  switchVisit = otherPerson =>
  {
    return otherPerson.visit(this)
  }

  update = obj =>
  {
    if(typeof obj !== "object")
    {
      throw new TypeError('arg is not an object')
    }
    else if(key in obj)
    {
      
    }
  }
}

module.exports = Person;

class Person {
  age = 0
  steps = 0

  constructor(name) {
   this.name = name
  }
  
  
  }
class Student extends Person {
  constructor(name, id) {
    super(name)
    this.id = id
  }
}
let p1 = new Student("Bonieky", 1)
console.log(`${p1.name} tem ${p1.age} anos e matrícula ${p1.id}`)
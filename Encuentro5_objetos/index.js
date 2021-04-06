class Carro {
  // constructor (name, lastName, age) {
  //   this.nombre = name
  //   this.apellido = lastName
  //   this.edad = age
  // }

  get nombre () {
    return this._nombre
  }

  set nombre (nombre) {
    this._nombre = nombre
  }

  get apellido () {
    return this._apellido
  }

  set apellido (apellido) {
    this._apellido = apellido
  }
  
  get edad () {
    return this._edad
  }

  set edad (edad) {
    this._edad = edad
  }

  arrancar () {
    return 'El carro de ' + this.nombre + ' ha arrancado'
  }

  frenar () {
    return 'El carro de ' + this.apellido + ' ha frenado'
  }

  cambioAceite () {
    return 'Al carro de ' + this.nombre + ' con edad ' + this.edad + ' se le ha cambiado el aceite'
  }
}

// let carroRoberto = new Carro('Roberto', 'Reina', 28)
// let carroMateo = new Carro('Mateo', 'Gurrea', 19)

// console.log(carroRoberto.arrancar(), carroMateo.frenar())
// console.log(carroRoberto.cambioAceite())

// let carroDaniel = new Carro()
// carroDaniel.nombre = 'Daniel'
// carroDaniel.apellido = 'Duque'
// carroDaniel.edad = 29
// console.log(carroDaniel.arrancar())
// console.log(carroDaniel.frenar())
// console.log(carroDaniel.cambioAceite())

// let carroNadia = new Carro()
// carroNadia.nombre = 'Nadia'
// carroNadia.apellido = 'Andrade'
// carroNadia.edad = 32
// console.log(carroNadia.arrancar())
// console.log(carroNadia.frenar())
// console.log(carroNadia.cambioAceite())

class Personas {
  get nombre () {
    return this._nombre
  }

  set nombre (nombre) {
    this._nombre = nombre
  }

  get apellido () {
    return this._apellido
  }

  set apellido (apellido) {
    this._apellido = apellido
  }

  get edad () {
    return this._edad
  }

  set edad (edad) {
    this._edad = edad
  }

  fullName () {
    // this.nombre + ' ' + history.apellido
    return `${this.nombre} ${this.apellido}`
  }

  es_mayor () {
    // if (this.edad > 18) {
    //   return true
    // } else {
    //   return false
    // }
    return this.edad > 18
  }
}

let panadero = new Personas()
panadero.nombre = 'Ramón'
panadero.apellido = 'Ortiz'
panadero.edad = 54

let cantante = new Personas()
cantante.nombre = 'Elena'
cantante.apellido = 'Velasquez'
cantante.edad = 30

let desarrollador = new Personas()
desarrollador.nombre = 'Emilio'
desarrollador.apellido = 'Raigosa'
desarrollador.edad = 17

console.log(desarrollador.fullName())
console.log(panadero.fullName())
console.log(cantante.fullName())

console.log(desarrollador.es_mayor())
console.log(panadero.es_mayor())
console.log(cantante.es_mayor())



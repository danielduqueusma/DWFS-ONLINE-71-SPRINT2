let edad = '29'
let edad1 = '40'
let edad2 = 40
let nombre = 'Daniel Duque Usma'
let tieneHijos = true

// console.log(typeof(edad), typeof(nombre), typeof(tieneHijos))

// if (edad > edad1) {
//  console.log(edad + 'es mayor que ' + edad1)
// } else {
//   if (edad1 < edad2) {
//     console.log(edad1 + 'es menor que ' + edad2)
//   } else {
//     console.log(edad2 + 'es menor que ' + edad1)
//   }
// }

// edad = parseInt(edad)

// console.log(edad + edad2)
// console.log(edad + edad1)

// if (!tieneHijos) {
//   console.log('Tiene hijos')
// } else {
//   console.log('No tiene hijos')
// }

// if (edad1 == edad2) {
//   console.log('Son iguales')
// } else {
//   console.log('No son iguales')
// }

// 1. tienen el mismo contenido que es 40, VAMOS BIEN
// 2 Tienen el mismo tipo?, String, Number, NO TE PUEDO DEJAT SEGUIR

// let var y const 
// string number y bool

//LOWER-CAMEL-CASE


// let numero1 = prompt('Ingrese un número')
// let numero2 = prompt('Ingrese un número')
// let numero3 = prompt('Ingrese un número')
// let resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3)
// let resta = parseInt(numero1) - parseInt(numero2) - parseInt(numero3)
// let multiplicacion = parseInt(numero1) * parseInt(numero2) * parseInt(numero3)
// alert('El resultado es ' + (resultado + resta + multiplicacion))
// alert('El resultado es ' + typeof(resultado) + typeof(resta) + typeof(multiplicacion))

let today = new Date().getTime()
let todayy = new Date(today)
let year = todayy.getFullYear()
let listMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let month = listMonths[todayy.getMonth()]
let day = todayy.getDate()
console.log(`${today} Fecha de hoy en Unix `)
console.log(`Fecha de hoy en Unix convertida: ${day} de ${month} del ${year} `)
console.log('Saludos mis desarrolladores estrellas de DWFE-ONLINE-3')
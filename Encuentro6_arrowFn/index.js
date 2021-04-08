// HOISTING
// let name;
// let name


// console.log('A')
// console.log('B')
// console.log('C')
// console.log('D')
// console.log('F')
// // console.log(name)
// console.log(name)
// name = 'Daniel'
// console.log(name)

// FORMAS DE CODEAR CON FUNCIONES

// function doble (num) {
//   return num * 2
// }
// console.log(doble(4))

// let doble2 = function (num) {
//   return num * 2
// }
// console.log(doble2(4))

// let doble3 = num => {
//   return num * 2
// }
// console.log(doble3(4))

// SCOPE

// let scope = 'Soy un scope global'

// function probarScope () {
//   let scope = 'Soy un scope local'
//   // scope = 'Soy un scope local'
//   console.log(`Estoy adentro de la función ${scope}`)
// }
// // scope = 'Soy global'

// probarScope()
// console.log(`Estoy afuera de la función ${scope}`)

// EXCEPCIONES CON TRY CATCH

function validarNumero(num){
    try {
      if (typeof(num) !== 'number') {
        throw new Error('No es un número')
      } else if (num > 40) {
        throw new Error('El número es mayor a 40 y no puede')
      }
      alert('Si es un número lo que ud ingresó')
    } catch (error)  {
      alert(error)
    }
}
validarNumero(41);

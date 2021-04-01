// let name = 'Daniel'
// console.log(name)

// if (true) {
//   let name = 'Manuela'
//   console.log(name)
// }

// if (true) {
//   let name = 'Jacob'
//   console.log(name)
// }

// console.log(name)

let numeros = [2, 5, 7, 47, 70, 100] //Es de longitud 6, pero la posición final es la 5
let nombres = ['Gabriela', 'Belén', 'Vera', 'Nadia', 'Belén']
let bool = [true, false, true, true, false]

// JOIN PARA CONVERTIR UN ARRAY A STRING
// console.log(nombres.join(';'))

// PUSH PARA AGREGAR AL FINAL
nombres.push('Daniel')

// UNSHIFT PARA AGREGAR AL PRINCIPIO
nombres.unshift('Ramiro')

// INDEXOF PARA BUSCAR UN ELEMENTO EN EL ARRAY
// console.log(nombres.indexOf('Belén'))

// SPLICE PARA ELIMINAR UN ELEMENTO EN EL ARRAY
// console.log(nombres.splice('Duque', 1))
// nombres.splice(4, 1, 'Franco')
// nombres.splice(nombres.indexOf('Belén'), 1)
// nombres.splice(nombres.length - 1, 1)

// POP PARA ELIMINAR EL ULTIMO ELEMENTO EN EL ARRAY
// nombres.pop()

// SHIFT PARA ELIMINAR EL PRIMER ELEMENTO EN EL ARRAY
// nombres.shift()

// SORT PARA ORDENAR EL ARRAY
// nombres.sort()

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i])
// }

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i])
// }

// for (let i = 0; i < bool.length; i++) {
//   console.log(bool[i])
// }

function mostrarDatos (cualquierNombre) {
  for (let i = 0; i < cualquierNombre.length; i++) {
    console.log(cualquierNombre[i])
  }
}

// mostrarDatos(numeros)
// mostrarDatos(nombres)
// mostrarDatos(bool)

let mix = ['America', 34, false, 60, 'Asia', true, true, true, 90, 'DWFS']
// mostrarDatos(mix)
console.log(typeof(mix[0]), typeof(mix[1]), typeof(mix[2]))

function sumaNumeros (arreglo) {
  let acumulador = 0
  let datosNoNumericos = []
  for (let i = 0; i < arreglo.length; i++) {
    if (typeof(arreglo[i]) === 'number') {
      console.log(arreglo[i] + ' es un número')
      acumulador = acumulador + arreglo[i]
    } else {
      datosNoNumericos.push(arreglo[i])
    }
  }
  console.log('La suma total de los números es: ' + acumulador)
  mostrarDatos(datosNoNumericos)
}

sumaNumeros(mix)


// DERECHOS DE AUTOR DE FRANCO

let array = [];

while (true) {
  let userInput = prompt("ingrese una Numero. Ingrese Stop para terminar:");
  if (userInput.toLowerCase() === "stop"){
    break;
  }
  else if (parseInt(userInput)){
    console.log(parseInt(userInput))
    array.push(parseInt(userInput));
  }
    else{
      console.log(parseInt(userInput))
      console.log(userInput + " no es numero")
    }
  
}

for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//ASINCRONISMO CUANDO DEFINO EL SCRIPT EN EL HTML EN EL TAG HEAD
// window.onload = function () {
//   let test = document.getElementById('test')
//   test.addEventListener('click', () => {
//     console.log('click')
//   })
// }

window.onload = function () {
  // function mostrarNombre (){
  //   console.log('Hola Daniel')
  // }
  // mostrarNombre()

  // function mostrarNombre (nombre){
  //   console.log(`Hola ${nombre} `)
  // }
  // mostrarNombre('Daniel')


  // CALLBACKS SIN PARAMETROS
  // function mostrarNombre (){
  //   console.log(`Hola Daniel`)
  // }

  // function mostrarApellido () {
  //   console.log(`Hola Duque`)
  // }

  // function mostrar (callback) {
  //   // console.log(callback)
  //   callback()
  // }

  // mostrar(mostrarNombre)
  // mostrar(mostrarApellido)


  // CALLBACKS CON PARAMETROS
  // function mostrarNombre (nombre){
  //   // console.log(`Hola ${nombre}`)
  //   console.log('Hola ' + nombre)
  // }

  // function mostrarApellido (apellido) {
  //   console.log(`Hola ${apellido}`)
  // }

  // mostrar('Vera', mostrarNombre)
  // mostrar('Orduna', mostrarApellido)

  // function mostrar (informacion, callback) {
  //   callback(informacion)
  // }

  //CALLBACK CON ARROW FUNCTIONS
  
  // function mostrar (informacion, callback) {
  //   // console.log(informacion, callback)
  //   callback(informacion)
  // }

  // mostrar('Vera', (texto) => {
  //   console.log('Hola ' + texto)
  // })

  // mostrar('Orduna', (texto) => {
  //   console.log('Hola ' + texto)
  // })

  //SUMAR Y RESTAR CON CALLBACKS
  let n1 = parseInt(prompt('Ingrese un número'))
  let n2 = parseInt(prompt('Ingrese un número'))

  // function sumar (n1, n2) {
  //   console.log(n1 + n2)
  // }

  // function mostrarResultado (num1, num2, callback) {
  //   callback(num1, num2)
  // }

  // mostrarResultado(n1, n2, sumar)
  
  function mostrarResultado (num1, num2, callback) {
    callback(num1 - num2)
  }
  
  mostrarResultado(n1, n2, (resultado) => {
    console.log(resultado)
  })
}
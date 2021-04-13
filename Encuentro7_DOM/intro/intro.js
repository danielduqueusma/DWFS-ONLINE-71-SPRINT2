window.onload = function () {

  // // SELECCIÓN DE NODOS
  // //document.getElementById

  // let parConId = document.getElementById('parConId')
  // // setTimeout(() => {
  // //   parConId.style.textTransform = 'uppercase'
  // // }, 2000);
  // // console.log(parConId)


  // // document.getElementsByTagName
  // let parrafos = document.getElementsByTagName('p')
  // for (let i = 0; i < parrafos.length; i++) {
  //   // parrafos[i].style.color = 'green'
  //   parrafos[i].style.color = '#ff4f4f'
  //   parrafos[i].style.fontSize = '20px'
  // }
  // // console.log(parrafos)

  // // document.getElementsByClassName
  // let parrafosClase = document.getElementsByClassName('parConClase')
  // for (let i = 0; i < parrafosClase.length; i++) {
  //   parrafosClase[i].style.textDecoration = 'underline'
  // }
  // // console.log(parrafosClase)

  // //document.querySelector
  // let parrafoQuery = document.querySelector('p#parConId')
  // parrafoQuery.style.color = 'purple'
  // // console.log(parrafoQuery)

  // // document.getElementById
  // let imgConId = document.getElementById('imgConId')
  // console.log('Atributos de un elemento', imgConId.attributes)

  // // className vs classList
  // console.log('Classname vs classList')
  // console.log(imgConId.className)
  // console.log(imgConId.classList)
  // // imgConId.className += 'nueva clase'
  // setTimeout(() => {
  //   imgConId.classList.remove('gray')
  //   imgConId.classList.add('hide')
  // }, 5000);

  // let lista = document.getElementById('elementList')
  // let nuevoElemento = document.createElement('li')
  // lista.appendChild(nuevoElemento).innerHTML = 'item 5'
  // lista.firstElementChild.innerHTML = 'Primer elemento'
  // lista.lastElementChild.innerHTML = 'Último elemento'

  // // INNERHTML vs OUTERHTML
  // let innerHtml = document.getElementById('innerHtml')
  // console.log(innerHtml.innerHTML)
  // console.log(innerHtml.outerHTML)
  // innerHtml.outerHTML = '<h4 id="innerHtml"> Titulo con un span <span id="tituloConSpan">Modificado</span></h4>'
  // let tituloConSppan = document.getElementById('tituloConSpan')
  // tituloConSppan.innerHTML = 'Modificado con inner'

  // localStorage.setItem('nombre', 'Daniel')
  // localStorage.setItem('correo', 'danielduqueusma@gmail.com')
  // console.log(localStorage.getItem('nombre'))
  // console.log(localStorage.getItem('correo'))
  // localStorage.removeItem('nombre')

  let nombre = prompt('Nombre y apellido')
  let backgroundColor = prompt('Background')
  let color = prompt('color fuente')
  let tamañoFuente = prompt('tamaño fuente')

  let datos = document.getElementById('datos')
  datos.innerHTML = nombre
  // datos.innerHTML += color
  datos.style.color = color
  datos.style.fontSize = tamañoFuente
  datos.style.backgroundColor = backgroundColor

}
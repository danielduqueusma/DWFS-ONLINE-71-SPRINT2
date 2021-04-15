window.onload = function () {
  // //click, onclick
  // let cuadrado = document.getElementById('cuadrado')

  // // 1 Forma
  // // cuadrado.addEventListener('click', () => {
  // //   console.log('Click')
  // //   cuadrado.classList.toggle('yellow')
  // // })

  // // Forma 2
  // // cuadrado.onclick = () => {
  // //   console.log('Click')
  // //   cuadrado.classList.toggle('yellow')
  // // }

  // //Forma 3 BUENA PRACTICA
  // cuadrado.addEventListener('click', cambiarColor)
  // function cambiarColor () {
  //   console.log('Click')
  //   cuadrado.classList.toggle('yellow')
  // }

  // //------------------------------------------------

  // //dobleClick, ondbClick
  // let cuadradoDbClick = document.getElementById('cuadradoDbClick')
  // cuadradoDbClick.addEventListener('dblclick', () => {
  //   console.log('Doble Click')
  //   cuadradoDbClick.classList.toggle('pink')
  // })

  // //------------------------------------------------
  // //KeyPress
  // let cuadradoKeyPress = document.getElementById('cuadradoKeyPress')
  // cuadradoKeyPress.addEventListener('keypress', (e) => {
  //   if (e.keyCode === 104) {
  //     console.log('Presioné la h')
  //     alert('jsk')
  //   }
  // })

  // //------------------------------------------------
  // //Mouse over
  // let cuadradoOver = document.getElementById('cuadradoOver')
  // cuadradoOver.addEventListener('mouseover', () => {
  //   console.log('Over')
  //   cuadradoOver.classList.toggle('green')
  // })

  //  //------------------------------------------------
  // //Mouse out
  // let cuadradoOut = document.getElementById('cuadradoOut')
  // cuadradoOut.addEventListener('mouseout', () => {
  //   console.log('Out')
  //   cuadradoOut.classList.toggle('purple')
  // })

  // //--------------------------------------------
  // //Stop Propagation
  // let cuadradoGrande = document.getElementById('cuadradoGrande')
  // let cuadradoMediano = document.getElementById('cuadradoMediano')
  // let cuadradoPeuqeno = document.getElementById('cuadradoPequeno')

  // cuadradoGrande.addEventListener('click', () => {
  //   alert('Grande')
  // })

  // cuadradoMediano.addEventListener('click', (e) => {
  //   e.stopPropagation()
  //   alert('Mediano')
  // })

  // cuadradoPeuqeno.addEventListener('click', (e) => {
  //   e.stopPropagation()
  //   alert('Pequeño')
  // })

  // //-------------------------------------------
  // let cuadradoRemoveListener = document.getElementById('cuadradoRemoveListener')
  // let cuadradoRemoveListenerBoton = document.getElementById('cuadradoRemoveListenerBoton')

  // // cuadradoRemoveListener.addEventListener('click', () => {
  // //   cuadradoRemoveListener.classList.toggle('gray')
  // // })
  // cuadradoRemoveListener.addEventListener('click', cambiarAGris)
  // function cambiarAGris () {
  //   cuadradoRemoveListener.classList.toggle('gray')
  // }

  // cuadradoRemoveListenerBoton.addEventListener('click', () => {
  //   cuadradoRemoveListener.removeEventListener('click', cambiarAGris)
  // })

  //-----------------------------------------------------------
  let inputLista = document.getElementById('inputLista')
  let ulLista = document.getElementById('ulLista')
  let botonAgregar = document.getElementById('botonAgregar')

  botonAgregar.addEventListener('click', () => {
    let nuevoElemento = document.createElement('li')
    nuevoElemento.innerHTML = inputLista.value
    ulLista.appendChild(nuevoElemento)
    inputLista.value = ''
  })

  inputLista.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      let nuevoElemento = document.createElement('li')
      nuevoElemento.innerHTML = inputLista.value
      ulLista.appendChild(nuevoElemento)
      inputLista.value = ''
    }
  })

  //--------------------------------------
  // 1. CREAR UN ELEMENTO EN EL HTML Y CAMBIAR EL COLOR DE TEXTO 
  //AL HACER OVER, Y REMOVERLO AL SALIR DEL OVER
  //(AGREGANDO Y REMOVIENDO CLASES)

  /**
   * 2. AL HACER CLICK EN ESE TEXTO, QUE SALGA UN PROMPT 
   * PARA INGRESAR
   * UN NUEVO TEXTO, Y REEMPLAZAR EL TEXTO ANTERIOR,
   */

   /**
   * 3. GUARDAR ESE TEXTO INGRESADO EN EL PROMPT
   * EN EL LOCAL STORAGE, DEMANERA QUE AL REFRESCAR LA PAG
   * SIEMPRE VEA EL ULTIMO VALOR MODIFICADO
   */
}
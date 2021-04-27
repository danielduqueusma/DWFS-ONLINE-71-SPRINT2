//Creación de promesas

// CON FUNCIONES
// function promesa1 () {
//   return new Promise ((resolve, reject) => {
//     if (false) {
//       resolve('La promesa se resolvió correctamente')
//     } else {
//       reject('La promesa no se resolvió correctamente')
//     }
//   })
// }

// promesa1().then(
//   (response) => {
//     console.log(response)
//   }
// ).catch(
//   (error) => {
//     console.log(error)
//   }
// )

// CON VARIABLES

// let promesa11 = new Promise ((resolve, reject) => {
//   if (false) {
//     resolve('La promesa se resolvió correctamente')
//   } else {
//     reject('La promesa no se resolvió correctamente')
//   }
// })

// promesa11.then(
//   (response) => {
//     console.log(response)
//   }
// ).catch(
//   (error) => {
//     console.log(error)
//   }
// )

//ejemplo de promesa resuelta

// function promesa2 () {
//   return new Promise ((resolve, reject) => {
//     if (true) {
//       setTimeout(() => {
//         resolve('La promesa se resolvió correctamente')
//       }, 5000);
//     } else {
//       reject('La promesa no se resolvió correctamente')
//     }
//   })
// }

// function promesa2 () {
//   return new Promise (function (resolve, reject) {
//     if (true) {
//       setTimeout(() => {
//         resolve('La promesa se resolvió correctamente')
//       }, 5000);
//     } else {
//       reject('La promesa no se resolvió correctamente')
//     }
//   })
// }

// promesa2().then(
//   (response) => {
//     console.log(response)
//   }
// )


//ejemplo de promesa rechazada

// function promesa3 () {
//   return new Promise ((resolve, reject) => {
//     if (false) {
//       setTimeout(() => {
//         resolve('La promesa se resolvió correctamente')
//       }, 5000);
//     } else {
//       setTimeout(() => {
//         reject('La promesa no se resolvió correctamente')
//       }, 5000);
//     }
//   })
// }

// promesa3().then(
//   (response) => {
//     console.log(response)
//   }
// ).catch(function (error) {
//   console.log(error)
// })


//ejemplo de promesa pendiente que termina resolviéndose

// function promesa4 () {
//   return new Promise ((resolve, reject) => {
//     console.log('pendiente...')
//     if (true) {
//       setTimeout(() => {
//         resolve('La promesa se resolvió correctamente')
//       }, 5000);
//     } else {
//       setTimeout(() => {
//         reject('La promesa no se resolvió correctamente')
//       }, 5000);
//     }
//   })
// }

// promesa4().then(
//   (response) => {
//     console.log(response)
//   }
// ).catch(function (error) {
//   console.log(error)
// })

// SIN EL CATCH
// function promesa5 () {
//   return new Promise ((resolve, reject) => {
//     console.log('pendiente...')
//     if (false) {
//       setTimeout(() => {
//         resolve('La promesa se resolvió correctamente')
//       }, 5000);
//     } else {
//       setTimeout(() => {
//         reject('La promesa no se resolvió correctamente')
//       }, 5000);
//     }
//   })
// }

// promesa5().then(
//   (response) => {
//     console.log(response)
//   },
//   (error) => {
//     console.log(error)
//   }
// )

// Fetch con promesa
// fetch('https://jsonplaceholder.typicode.com/posts').then(
//   (response) => {
//     response.json()
//   }
// ).then(
//   (response) => {
//     console.log(response)
//   }
// )
window.onload = function () {
  // let listaId = document.getElementById('lista')
  // let newItem
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(
  //     (response) => {
  //       return response.json()
  //     })
  //   .then(
  //     (json) => {
  //     console.log(json)
  //     for (let i = 0; i < json.length; i++) {
  //       newItem = document.createElement('li')
  //       newItem.innerHTML = json[i].title
  //       listaId.appendChild(newItem)
  //     }
  // })

  fetch(
    'https://api.giphy.com/v1/gifs/trending?api_key=Tqhprsmnbs6alhnP7fIQHFqhOBvTaqj8&limit=25&rating=g'
    )
    .then(
      (response) => {
        return response.json()
      }).then(
        (response) => {
          console.log(response.data)
        }
      )
}

// Vamos a utilizar una API que nos brinda GitHub para traer información a 
//nuestro desarrollo y poder mostrarla en nuestro sitio.
// En el siguiente ejercicio vamos a crear juntos una función que reciba como 
//parámetro un usuario de GitHub y nos de su información y cuáles son sus 5 
//primeros seguidores.
// Encuentra la información del usuario haciendo una llamada a:


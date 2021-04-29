// window.onload = () => {
//   // PROMISE.ALL

// /**
//  * @param nombreParametro Nombre del usuario
//  * @description Method that return a promise to get posts from JSON placeholder API
//  * @returns Return a promise
//  */
// function posts () {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }

// function comments (userName) {
//   console.log(userName)
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/comments').then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }

// function users () {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }

// users().then(
//   (response) => {
//     console.log(response)
//     comments(response[0]).then(
//       (response) => {
//         console.log(response)
//       }
//     )
//   }
// )

// users().then(
//   (response) => {
//     console.log(response)
//     return comments(response[0])
//   }
// ).then(
//   (response) => {
//     console.log(response)
//   }
// )

// // comments().then(
// //   (response) => {
// //     console.log(response)
// //   }
// // )

// // posts().then(
// //   (response) => {
// //     console.log(response)
// //   }
// // )

// // Promise.all([users(), comments(), posts()]).then(
// //   (response) => {
// //     console.log(response)
// //   }
// // ).catch(
// //   (error) => {
// //     console.error(error)
// //   }
// // )

// // Promise.race([users(), comments(), posts()]).then(
// //   (response) => {
// //     console.log(response)
// //   }
// // ).catch(
// //   (error) => {
// //     console.error(error)
// //   }
// // )

// // POKEMON
// let num

// function pikachu () {
//   num =  Math.floor(Math.random() * 500)
//   return new Promise((resolve, reject) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }

// function machop () {
//   num =  Math.floor(Math.random() * 500)
//   return new Promise((resolve, reject) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }

// function paras () {
//   num =  Math.floor(Math.random() * 500)
//   return new Promise((resolve, reject) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(
//       (response) => {
//         return response.json()
//       }
//     ).then(
//       (response) => {
//         resolve(response)
//       }
//     )
//   }).catch(
//     (error) => {
//       reject(error)
//       console.error(error)
//     }
//   )
// }
// //front_default
// let lista = document.getElementById('lista')
// let newItem

//   function renderView (pokemon) {
//     for (let i = 0; i < pokemon.length; i++) {
//       newItem = document.createElement('li')
//       newItem.classList.add('item')
//       newItem.innerHTML = `<img src=${pokemon[i].sprites.front_default} /><span class="fontColor">${pokemon[i].name}</span>`
//       lista.appendChild(newItem)
//     }
//   }

//   Promise.all([machop(), pikachu(), paras()]).then(
//     (response) => {
//       renderView(response)
//     }
//   )
// }

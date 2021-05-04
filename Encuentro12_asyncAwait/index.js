// OPEN MOVIE API 7fb789f2 - http://www.omdbapi.com/
// WEATHER API 1c67ae33adc312d33476ae4d68a09beb -https://openweathermap.org/

window.onload = () => {
  let searchInput = document.getElementById('searchInput')
  let btnBuscar = document.getElementById('btnBuscar')
  let infoBusqueda = document.getElementById('infoBusqueda')
  let item

  btnBuscar.addEventListener('click', () => {
    // requestJsonPlaceholder()
    buscarInfo(searchInput.value)
  })

  async function requestJsonPlaceholder () {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let info = await response.json()
    // console.log(info)
    return info
  }

  // MANEJANDO ERRORES CON ASYNC AWAIT

  // let test = requestJsonPlaceholder
  // test().then(
  //   (response) => {
  //     console.log(response)
  //   }
  // ).catch((err) => console.error(err))

  async function buscarInfo (country) {
    let apiKey = '1c67ae33adc312d33476ae4d68a09beb'
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)
    let info = await response.json()

    renderVista(info)
    console.log(info)
  }

  function renderVista (infoPais) {
    item = document.createElement('article')
    item.innerHTML = `<h1>Pais: ${infoPais.name}</h1><h2>Zona horaria: ${infoPais.timezone}</h2><h3>Coordenadas: Lon ${infoPais.coord.lon}, Lat ${infoPais.coord.lat} </h3>`
    infoBusqueda.appendChild(item)
    searchInput.value = ''
  }
}
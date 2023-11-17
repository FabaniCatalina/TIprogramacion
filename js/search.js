let API = "0cfe01fc90041a85b25d69b07b987148";
let queryString= location.busqueda;
let queryString0bj= new URLSearchParams(queryString);
let resultBusqueda = queryString0bj.get("busqueda");
let form = document.querySelector('form');
let input = document.querySelector('input');
let results = document.querySelector('#resultados');
let pelis = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${resultBusqueda}`
/*/
function mostrarResultados(){
  let busqueda = document.getElementById("busqueda").value;
  let resultados = "Los resultados para la busqueda de: " +busqueda;
  document.getElementById("resultados").innerHTML = resultados;

}

/*/

fetch(pelis)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    let datas = data.results;
    let info = " ";
    if (datas.lenght === 0){
      datas.innerHTML = '<p class="no_result"> No hay resultados para su busqueda</p>';
    }
    else{
      for (let index = 0; index < datas.length; index++) {
        let posterPath = datas[index].poster_path;
        console.log(datas[index]);
        if (posterPath != null){
          info+=`
            <div id="resultados">
              <a href="detail_p.html"?id=${datas[index].id}><img class="ima"
                src="https://image.tmdb.org/t/p/w500/${posterPath}"
                alt="imagen de pelicula"></a> 
            </div>
          `
        }
        else{
          info+=`
            <div id="resultados">
              <a href="detail_p.html"?id=${datas[index].id}><img class="ima"
                src="../img/descarga.png"
                alt="imagen de pelicula"></a> 
            </div>
        `
        }
      }
    }
    results.innerHTML = info
})
.catch(function(error){
    console.log("Error al obtener datos de peliculas: " +error)
})



/*/
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let query = input.value;
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`);
  let data = await response.json();

  results.innerHTML = '';

  if (data.results.length === 0) {
    results.innerHTML = '<p>No se encontraron resultados para su búsqueda.</p>';
  } else {
    let heading = document.createElement('h2');
    heading.textContent = `Resultados de búsqueda para: ${query}`;
    results.appendChild(heading);

    let list = document.createElement('ul');

    for (let result of data.results) {
      let item = document.createElement('li');
      let link = document.createElement('a');
      link.href = `https://www.themoviedb.org/movie/${result.id}`;
      link.textContent = result.title;
      item.appendChild(link);
      list.appendChild(item);
    }

    results.appendChild(list);
  }
});

/*/
let API = "0cfe01fc90041a85b25d69b07b987148";
let queryString= location.busqueda;
let queryString0bj= new URLSearchParams(queryString);
let resultBusqueda = queryString0bj.get("busqueda");
let form = document.querySelector('form');
let input = document.querySelector('input');
let results = document.querySelector('#resultados');
let pelis = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${resultBusqueda}`


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
        info+=`
          <div id="resultados">
            <a href="detail_p.html"?id=${datas[index].id}><img class="ima"
              src="https://image.tmdb.org/t/p/w500/${posterPath}"
              alt="imagen de pelicula"></a> 
          </div>
        `
      }
    }
    results.innerHTML = info
})
.catch(function(error){
    console.log("Error al obtener datos de peliculas: " +error)
})




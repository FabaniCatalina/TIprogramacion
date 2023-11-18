let API = "0cfe01fc90041a85b25d69b07b987148";


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id_pelicula = queryStringObj.get("id");
let URL = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${API}`

let imagenPeliculas = document.querySelector(".navbar")
let parrafo = document.querySelector(".descripcion")
let nombre = document.querySelector("#titulo")
let fecha = document.querySelector(".")
let duracion = document.querySelector(".")
let rating = document.querySelector(".")

fetch(URL)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data.results)
    nombre.innerHTML=  `<h2 id="titulo">${data.title}</h2>`

        
    }
   
)
.catch(function(error){
    console.log(error)
})
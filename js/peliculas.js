let API = "0cfe01fc90041a85b25d69b07b987148";
let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}`
let peliT = document.querySelector("#peliT")
/*Peliculas*/
fetch(URL)
.then(function(res){
    return res.json();
})
.then(function(data){
    let datas = data.results;
    let info = " ";
    console.log(data.results)
    for (let index = 0; index < datas.length; index++) {
        console.log(datas[index]);
        info+=` <div class= "pelicula">
                    <a href="detail_p.html"><img class="ima" src="https://image.tmdb.org/t/p/w500/${datas[index].poster_path}" alt="12 hombres en pugna"></a>
                    
                </div>
        `
        
    }
    peliT.innerHTML = info
})
.catch(function(error){
    console.log(error)
})
let API = "0cfe01fc90041a85b25d69b07b987148";
let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}`
let peliP = document.querySelector("#peliP")
/*Peliculas populares*/
fetch(URL)
.then(function(res){
    return res.json();
})
.then(function(data){
    let datas = data.results;
    let info = " ";
    for (let index = 0; index < 7; index++) {
        console.log(datas[index]);
        info+=`<div>
                    <div class="titu">
                        <h3>${datas[index].title}</h3>
                    </div>
                    <a href="./peliculas.html"?id=${datas[index].id}><img class="ima"
                        src="https://image.tmdb.org/t/p/w500/${datas[index].poster_path}"
                        alt="12 hombres en pugna"></a>

                    <h4>Fecha de estreno: ${datas[index].release_date}</h4>
                </div>
        `
        
    }
    peliP.innerHTML = info
})
.catch(function(error){
    console.log(error)
})

/*Series populares*/
let seriesP = document.querySelector("#seriesP")
let URLSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${API}`
fetch(URLSeries)
.then(function(res){
    return res.json();
})
.then(function(data){
    let datas = data.results;
    let info = " ";
    for (let index = 0; index < 7; index++) {
        console.log(datas[index]);
        info+=`<div>
                    <div class="titu">
                        <h3>${datas[index].name}</h3>
                    </div>
                    <a href="series.html"?id=${datas[index].id}><img class="ima" 
                            src="https://image.tmdb.org/t/p/w500/${datas[index].poster_path}"
                            alt="Breaking Bad"></a>

                    <h4>Fecha de estreno: ${datas[index].first_air_date}</h4>
                </div>
        `
        
    }
    seriesP.innerHTML = info
})
.catch(function(error){
    console.log(error)
})

/*Peliculas mejor valoradas*/
let peliV = document.querySelector("#peliV")
let URLPeliV = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}`
fetch(URLPeliV)
.then(function(res){
    return res.json();
})
.then(function(data){
    let datas = data.results;
    let info = " ";
    for (let index = 0; index < 7; index++) {
        console.log(datas[index]);
        info+=`<div>
                    <div class="titu">
                        <h3>${datas[index].title}</h3>
                    </div>
                    <a href="series.html"?id=${datas[index].id}><img class="ima" 
                            src="https://image.tmdb.org/t/p/w500/${datas[index].poster_path}"
                            alt="Breaking Bad"></a>

                    <h4>Fecha de estreno: ${datas[index].release_date}</h4>
                </div>
        `
        
    }
    peliV.innerHTML = info
})
.catch(function(error){
    console.log(error)
})
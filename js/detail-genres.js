let APIkey="0cfe01fc90041a85b25d69b07b987148"

let queryString1=location.search
let queryStringObjeto =new URLSearchParams(queryString)
let gene= queryStringObj.get("name") ///aca lo que estoy programando es para que recupere: querysting/entrada del usuario
let type= queryStringObj.get("tipo")
let nomGen=queryStringObj.get("nombreGen")
console.log(gen)

let urlgend = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genre=${gene}&api_key=${APIkey}`
let urlgend2 = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=1&sort_by=popularity.desc&with_genres=${gene}&api_key=${APIKey}`

if(type=="movie")
    fetch(urlgend)
        .then(funcion(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.querySelector("#imputUsuario").innerHTML=nomGen
            let laspelis = data.results
            for (let i=0; i<=9; i++){
                let art=document.querySelector("#intu")
                art.innerHTML+= `<a href= "detail_s.html?id=${lista_peliculas[i].id}">
                <article>
                    <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
                    <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p>
                </article>
                </a>`

            }
            })
        .catch(function(error){
            console.log(error);
        })


    }else if(type=="TVshow"){
        fetch(urlgend2)
            .then(funcion(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                document.querySelector("#imputUsuario").innerHTML=nomGen
                let laspelis = data.results
                for (let i=0; i<=9; i++){
                    let art=document.querySelector("#intu")
                    art.innerHTML+= `<a href= "detail_s.html?id=${lista_peliculas[i].id}">
                    <article>
                        <img src="https://image.tmdb.org/t/p/w342${lista_peliculas[i].poster_path}">
                        <p>${lista_peliculas[i].title}</p><p>${lista_peliculas[i].release_date}</p>
                    </article>
                    </a>`
                }

                })
            .catch(function(error){
                console.log(error);
            })
    }

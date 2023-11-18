let API = "0cfe01fc90041a85b25d69b07b987148";

let purl=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`
let surl=`https://api.themoviedb.org/3/genre/tv/list?api_key=${API}`

let qS = location.search
let queryStringObject = new URLSearchParams(qS)
let GG = queryStringObject.get('busqueda') 


fetch(purl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listGenreP = data.results
        let topSerie= document.querySelector('.ggP');
        topSerie.innerHTML+=`Generos Peliculas:`
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos = data.genres[i].name + "  "
            let article=document.querySelector('.gg1');
            article.innerHTML+=`<a href="detail-genres.html?id=${data.genres[i].id}&name=${lista_generos}&type=movie"><article ><p>${lista_generos}</p></article></a>`

        }
       
    })
    .catch(function(error){
        console.log(error);
    })

    fetch(surl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listGenreS = data.results
        let topSerie= document.querySelector('.gS');
        topSerie.innerHTML+=`Generos Series:`
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos = data.genres[i].name + "  "
            let article=document.querySelector('.gg2');
            article.innerHTML+=`<a href="detail-genres.html?id=${data.genres[i].id}&name=${lista_generos}&type=serie"><article ><p>${lista_generos}</p></article></a>`

        }
        console.log(lista_generos)
       
    })
    .catch(function(error){
        console.log(error);
    })
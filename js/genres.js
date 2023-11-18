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
        let listGenreP = data.genres
        console.log(listGenreP)
        let lista_generos = document.querySelector(".grupo_gg1")
        let gege = ""
        
        for(let i=0; i<data.genres.length; i++){
            gege += `<article>
                        <ul>
                            <li>
                                <h2>
                                    <a href=./genre_detail.html?id=${listGenreP[i].id}listaGenreP[i].title}</a>
                                </h2>
                            <li>
                        </ul>
                    </article>`;
        }
        
        lista_generos.innerHtML = gege;
    })
    .catch(function(error)) {
        console.log(error);
        }
        
    
    
  fetch(surl)
      .then(function(response){
          return response.json();
      })
      .then(function(data){
          console.log(data)
          let listGenreS = data.genres
          console.log(listGenreS)
          let lista_generos = document.querySelector(".grupo_gg1")
          let geges = ""
          
          for(let i=0; i<data.genres.length; i++){
              geges += `<article>
                          <ul>
                              <li>
                                  <h2>
                                      <a href=./genre_detail.html?id=${listGenreS[i].id}listaGenreS[i].name}</a>
                                  </h2>
                              <li>
                          </ul>
                      </article>`;
          }
          
          lista_generos.innerHtML = geges;
      })
      .catch(function(error)) {
          console.log(error);
          }      
      
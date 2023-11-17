let APIgen = "0cfe01fc90041a85b25d69b07b987148";
let gpeli= `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIgen}`
let gseri = `https://api.themoviedb.org/3/genre/tv/list?api_key=${APIgen}`

let peliP = document.querySelector("#gen")
/*generos*/
fetch(URL)
.then(function(res){
    return res.json();

})
.then(function(data){
    console.log(data)
        
    

})
.catch(function(error){
    console.log(error)
})


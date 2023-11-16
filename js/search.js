let API = "0cfe01fc90041a85b25d69b07b987148"
let queryString= location.search;
let queryString0bj= new URLSearchParams(queryString);

let form = document.querySelector('form');
let input = document.querySelector('input');
let results = document.querySelector('#results');
/*/
function mostrarResultados(){
  let busqueda = document.getElementById("busqueda").value;
  let resultados = "Los resultados para la busqueda de: " +busqueda;
  document.getElementById("resultados").innerHTML = resultados;

}

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


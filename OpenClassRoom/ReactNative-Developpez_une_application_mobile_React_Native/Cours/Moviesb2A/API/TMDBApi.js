const API_TOKEN = "0588ec4965273b578f2e3c96c95c2e07"

// doc TMDB : https://developers.themoviedb.org/3/getting-started/search-and-query-for-details 
// exemple doc : https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

export function getFilmsFromApiWithSearchedText(text, page){
  const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + '&page=' + page
  // fetch : librairie javascript
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))  
} 

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
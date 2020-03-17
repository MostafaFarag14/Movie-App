const api_key = '2b2be35c63bf3fe9e48a5ed70ef9a13d'

export let getData = (type, page =1) => {
  return fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&page=${page}`)
  .then(response => response.json())
  .then( jsonResponse => jsonResponse)
}

const api_key = '2b2be35c63bf3fe9e48a5ed70ef9a13d'

export let getData = (type, page = 1) => {
  return fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&page=${page}`)
    .then(response => response.json())
    .then(jsonResponse => jsonResponse)
}

export let genres = () => {

  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`)
    .then(response => response.json())
    .then(jsoinResponse => genres = jsoinResponse)
}

export let videos = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
    .then(response => response.json())

}

export let movie = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    .then(response => response.json())
}

export let urlBuilder = () => {
  return fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`)
    .then(resp => resp.json())
    .then(jsonresp => {
      return {
        base_url: jsonresp.images.base_url ,
        img_size: jsonresp.images.backdrop_sizes[2]
      }
    })
}

export let getTrending = (page, media_type = 'movie', time_window = 'day') => {
    return fetch(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${api_key}&page=${page}`)
      .then(resp => resp.json())
  }

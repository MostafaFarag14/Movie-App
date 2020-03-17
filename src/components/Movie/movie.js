import React from 'react'
import { useParams } from 'react-router-dom'
import { base_url, img_size } from '../MovieList/movieList'
import './movie.css'

console.log(img_size, base_url)
export class Movie extends React.Component {
  render() {
    console.log(img_size, base_url)
    let movie = this.props.movie
    return (
      <div id="movie" className="container-fluid my-5" style={{ backgroundImage:`url("${base_url}${img_size}${movie.backdrop_path}")`}}>
        <div id="movie-details" className="cont row featurette text-white">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">{movie.title}</h2>
            <p className="lead my-3">{movie.overview}</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src={`${base_url}${img_size}${movie.poster_path}`} />
          </div>
        </div>
      </div>

    )
  }
}
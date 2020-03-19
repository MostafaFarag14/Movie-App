import React from 'react';
import { Link } from 'react-router-dom'
import './movieList.css'
const imgNotFound = './assets/img/image_not_found.png'
const apiKey = '2b2be35c63bf3fe9e48a5ed70ef9a13d'
export let base_url, img_size
export class MovieList extends React.Component {
  constructor() {
    super()
    this.urlBuilder()
    this.state = {
      base_url: '',
      img_size: ''
    }
  }
  urlBuilder = () => {
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(jsonresp => {
        
        this.setState({ base_url: jsonresp.images.base_url })
        this.setState({ img_size: jsonresp.images.backdrop_sizes[2] })
        base_url = this.state.base_url
        img_size = this.state.img_size
        
      })
  }

  render() {

    return (
      <div>
        
        <div className="row">
          {this.props.trendingList.map((movie, index) => {
            let url = `${this.state.base_url}${this.state.img_size}${movie.backdrop_path}`
            if (movie.backdrop_path) {
              // url = imgNotFound
            return (
              <div key={index} className="col-md-6 my-4 h-100">
                <Link onClick={() => {
                  this.props.getMovie(movie)
                }} to={`/movie/${movie.id}`} className="card border border-dark rounded-lg text-white" href="#">
                  <div id="overView" className="overlay container" >
                    <span>
                      {movie.overview}
                    </span>
                  </div>
                  <img width="" height="" src={url} className="card-img-top" />
                  <div className="card-footer px-4 d-flex justify-content-between align-items-center">
                    <span className="movieTitle col-10 text-white text-justify">{movie.title}</span>
                    <div className="movieRating rounded-circle"><label className="mb-0">{movie.vote_average}</label></div>
                  </div>
                </Link>
              </div>
            )
          }

          })}

        </div>

      </div>

    )
  }
}
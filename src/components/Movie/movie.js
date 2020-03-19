import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import { base_url, img_size } from '../MovieList/movieList'
import './movie.css'
import { genres, videos, movie, urlBuilder } from '../../util/MovieApi/movieApi'
import { MovieDetails } from '../MovieDetails/movieDetails'

export class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {},
      trailer: '',
      id: this.props.movieId,
      genres: [],
      release: '',
      base_url: '',
      img_size: ''
    }
    urlBuilder()
      .then( resp => {
        this.setState({base_url: resp.base_url})
        this.setState({img_size: resp.img_size})
      })
    this.getMovie()
    this.getVideo()

  }

  // getGenres = () => {
  //   genres()
  //     .then(
  //       (genres) => genres.genres
  //     )
  //     .then((genres_array) => {
  //       this.setState({ movie_genres: genres_array.filter(genre => this.state.movie.genre_ids.includes(genre.id)) })
  //     })
  // }

  getVideo = () => {
    videos(this.state.id)
      .then(video => video.results[0].key)
      .then(key => this.setState({ trailer: key })
      )
  }

  getMovie = () => {
    movie(this.state.id)
      .then(movie => {
        this.setState({ movie: movie, genres: movie.genres, release: movie.release_date })
      }
      )
  }
  render() {

    return (

      <div id="movie" className="container-fluid py-3" style={{ backgroundImage: `url("${this.state.base_url}${this.state.img_size}${this.state.movie.backdrop_path}")` }}>
        
        <div id="movie-details" className="cont row text-white">
          <MovieDetails details={this.state} />

          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" style={{ height: "600px", width: "auto" }} src={`${this.state.base_url}${this.state.img_size}${this.state.movie.poster_path}`} />
          </div>
        </div>

        <div className="modal fade bd-example-modal-sm" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${this.state.trailer}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
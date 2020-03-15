import React from 'react';

const apiKey = '2b2be35c63bf3fe9e48a5ed70ef9a13d'
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
      })
  }

  render() {
    return (
      <div>
        {console.log(this.props.trendingList)}
        <div className="row">
          {this.props.trendingList.map((movie, index) => {
            if (movie.backdrop_path) {
              return (
                <div key={index} className="col-md-6 my-4 h-100">
                  <a className="card border border-dark rounded-lg text-white" href="#">
                    <img width="" height="" src={`${this.state.base_url}${this.state.img_size}${movie.backdrop_path}`} className="card-img-top" />
                    <div className="card-footer px-4 d-flex justify-content-between align-items-center">
                      <span className="col-10 text-truncate">{movie.overview}</span>
                      <div className=""><label className="">{movie.release_date}</label></div>
                    </div>

                  </a>
                </div>
              )
            }

          })}

        </div>

      </div>

    )
  }
}
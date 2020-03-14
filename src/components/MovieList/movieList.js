import React from 'react';

const apiKey = '2b2be35c63bf3fe9e48a5ed70ef9a13d'
export class MovieList extends React.Component {
  constructor() {
    super()
    this.state = {
      base_url: '',
      img_size: '',
      img_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
      trendingList: [

      ]
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

  getTrending = (media_type, time_window) => {
    fetch(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(jsonresp => {
        this.setState({ trendingList: jsonresp.results })
        console.log(this.state.trendingList)
      })
  }
  componentWillMount() {
    this.urlBuilder()
    this.getTrending('movie', 'day')
  }

  render() {

    return (
      <div>
        <h1>place</h1>
        {/* <img src={`${this.state.base_url}${this.state.img_size}${this.state.img_path}`} /> */}
        <div className="container">
        <div className="row">
          {this.state.trendingList.map(movie => {
            return (
                <div className="col-4 my-4">
                  <div className="card border border-dark  rounded-lg">
                    <img width="" height="" src={`${this.state.base_url}${this.state.img_size}${movie.backdrop_path}`} className="card-img-top  rounded-sm" />
                  </div>
                </div>
            )
          })}
          </div>
        </div>

      </div>

    )
  }
}
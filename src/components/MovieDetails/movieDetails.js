import React, { Component } from 'react'

export class MovieDetails extends Component {

  render() {
    
    return (
      <div className="col-md-7 order-md-2">

        <div className="row">
          <h2 className="text-left my-3">{this.props.details.movie.title} </h2>
          <span className="text-left text-muted my-3 p-2">({this.props.details.release.substr(0, 4)})</span>
        </div>

        <div className="row mt-5 ">
          <h4>Overview</h4>
          <p className="my-3 text-left">{this.props.details.movie.overview}</p>
        </div>

        <h4 className="row mt-4">Tags</h4>

        <div className="row">
          {this.props.details.genres.map((item, index) => {
            return (<ul key={index} className="pr-3 mt-2">
              <li>
                {item.name}
              </li>
            </ul>)
          })}
        </div>

        <h4 className="row">Rating</h4>

        <div className="row">
          <meter value={this.props.details.movie.vote_average} min="0" max="10" className="mt-2" low="3" high="6" optimum="8" ></meter>
          <h5 className="m-1 ml-3">{this.props.details.movie.vote_average}</h5>
        </div>

        <button type="button" className="row justify-content-center btn btn-warning my-5 col-6 " data-toggle="modal" data-target=".bd-example-modal-sm">Watch Trailer</button>

      </div>

    )
  }
}


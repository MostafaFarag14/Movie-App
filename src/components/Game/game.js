import React from 'react'
// import crus from '../../assets/img/8d5c4eaba157208afee782f8a2d99d6959637a48.jpg'


export class Game extends React.Component {
  render() {
    return (
      <a href="#" className="card border-0 text-white">
        <div className="overlay container">get borderland free</div>
        <img src={this.props.image.src} className="card-img-top" />

        <div className="card-footer px-4 d-flex justify-content-between align-items-center">
          <span className="">CRUSADER KINGS II: IMsmallERIAL COLLECTION</span>
          <div className=""><label className="">US$249.99</label></div>
        </div>

      </a>
    )
  }
}
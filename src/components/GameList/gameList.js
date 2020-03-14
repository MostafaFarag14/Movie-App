import React from 'react'
import { Game } from '../Game/game'
import images from '../images/images'

let parity = true
export class GameList extends React.Component {
  render() {
    return (images.map(image => {
      if (parity) {
        parity = false
        return (
          <div className="row my-4">
            <div className="col-md-6">
              <Game image={image} />
            </div>
            <div className="col-md-6">
              <Game image={image} />
            </div>
          </div>
        )
      }
      else {
        parity = true
        return (
          <div className="row my-4">
            <div className="col-md-4">
              <Game image={image} />
            </div>
            <div className="col-md-4">
              <Game image={image} />
            </div>
            <div className="col-md-4">
              <Game image={image} />
            </div>
          </div>
        )
      }

    }

    ))


  }
}
/*
{
        let x = []
        if (index % 2 === 0) {
          parity = 6
          x=[1,2]
        }
        else {
          parity = 4
          x=[1,2,3]
        }
        return (
          <div key={index}>
            <div className="row my-4">
              {x.map((item, index) => {
                return (
                  <div key={index} className={`col-md-${parity}`}>
                    <Game />
                  </div>)
              })
              }
            </div>
          </div>)
      }
      */
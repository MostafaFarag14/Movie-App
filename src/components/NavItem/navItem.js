import React from 'react'
import { getData } from '../../util/MovieApi/movieApi'
export class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    getData(this.props.item.ref, 1)
      .then(data => { this.setState({ data: data }) })
  }

  getMovies = (e) => {
    this.props.updateActive(this.props.item.title)
    getData(this.props.item.ref, 1)
      .then(data => { this.setState({ data: data}) })
    this.props.getList(this.state.data)

  }
  render() {
    let href = '#'
    let activity = 'nav-item'
    href = this.props.item.title === 'Trending'? '/' : '#'
    activity = this.props.item.title === this.props.active? 'nav-item active' : 'nav-item'
    return (
      <li className={activity}>
        <a className="nav-link" href={href} onClick={this.getMovies}>{this.props.item.title}</a>
      </li>
    )
  }
}
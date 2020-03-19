import React from 'react'
import { getData } from '../../util/MovieApi/movieApi'
import { Link } from 'react-router-dom'
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
      .then(data => { this.setState({ data: data }) })
    this.props.getList(this.state.data)

  }
  render() {
    let href
    let activity = 'nav-item'
    href = this.props.item.title === 'Trending' ? '/' : `/category/${this.props.item.title}`
    activity = this.props.item.title === this.props.active ? 'nav-item active' : 'nav-item'

    if (this.props.item.title === 'Trending') {
      return (
        <li className={activity}>
          <a className="nav-link" href={href}>{this.props.item.title}</a>
        </li>
      )
    }
    else {
      return (
        <li className={activity}>
          <Link className="nav-link" to={href} onClick={this.getMovies}>{this.props.item.title}</Link>
        </li>
      )
    }

  }
}
import React from 'react'
import { Link } from 'react-router-dom'
import {NavItem} from '../NavItem/navItem'
const logo = '/assets/img/loogo.png'
const search = '/assets/img/icons8-search.svg'
const api_logo = '/assets/img/movieDb.svg'
const git_logo = '/assets/img/GitHub.png'

const navItems = [
  {
    title: 'Trending',
    ref: '/' 
  },
  {
    title: 'Top Rated',
    ref: 'top_rated'
  },
  {
    title: 'Popular',
    ref: 'popular'
  },
  {
    title: 'Upcoming',
    ref: 'upcoming'
  }
]

export class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      active: 'Trending'
    }
  }
  updateActive = (item) =>{
    this.setState({active: item})
  }
  handleSubmit = (e) => {
    let searchInput = document.getElementById('search')
    console.log(searchInput.value)
    this.props.search(searchInput.value)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark shadow rounded sticky-top" style={{ backgroundColor: "#494F5C" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} width="50" height="50" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {navItems.map( (item,index) => <NavItem key={index} active={this.state.active} updateActive={this.updateActive} item={item} getList={this.props.getList} /> )}
              </ul>

              <form className="form-inline my-2 my-lg-0 mx-5">
                <input id="search" className="form-control mr-sm-2 bg-dark border-0 text-white" type="search" placeholder="Search" aria-label="Search" name="search" onChange={this.handleSubmit} />
                <button className="btn btn-outline-secondary my-2 my-sm-0 border-0" type="button" onClick={this.handleSubmit}><img src={search} /></button>
              </form>

              <a href="https://github.com/MostafaFarag14/Movie-App.git" target="_blank" className="px-4">
                <img src={git_logo}  height="40" width="40"/>
              </a>

              <a href="https://www.themoviedb.org/documentation/api " target="_blank">
                <img src={api_logo} height="50" width="130"/>
              </a>

            </div>
          </div>

        </nav>
      </>

    )
  }
}
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from '../Header/header'
import { GameList } from '../GameList/gameList'
import { Footer } from '../Footer/footer'
import { MovieList } from '../MovieList/movieList'
import { Pagination } from '../Pagination/pagination'
import { Route } from 'react-router-dom'
import { About } from '../About/about'
import { Movie } from '../Movie/movie'

const apiKey = '2b2be35c63bf3fe9e48a5ed70ef9a13d'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      trendingList: [],
      page: 1,
      movie: {}
    }
    this.getTrending(this.state.page)
  }

  getPageNumber = (Page) => {

    if (Page === 'Next') {
      const page = this.state.page + 1
      this.getTrending(page)
    }
    else if (Page === 'Prev' && this.state.page > 1) {
      const page = this.state.page - 1
      this.getTrending(page)
    }
    else { this.getTrending(parseInt(Page)) }

  }

  getTrending = (page, media_type = 'movie', time_window = 'day') => {
    fetch(`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${apiKey}&page=${page}`)
      .then(resp => resp.json())
      .then(jsonresp => {
        this.setState({ trendingList: jsonresp.results, page: page })
      })
  }

  getSearch = (searchWord) => {
    if (searchWord) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchWord}`)
        .then(resp => resp.json())
        .then(jsonresp => {
          this.setState({ trendingList: jsonresp.results, page: 1 })
        })
    }

  }
  getMovie = (movie) => {
    this.setState({ movie: movie })
  }

  getList = (list) => {
    this.setState({ trendingList: list.results, page: 1 })
  }
  render() {
    return (
      <div className="App">
        <Header search={this.getSearch} getList={this.getList}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/' render={() => {
          return (
            <div className="cont">
              <MovieList trendingList={this.state.trendingList} getMovie={this.getMovie} />
              <Pagination pageNumber={this.getPageNumber} page={this.state.page} />
            </div>
          )
        }}
        />
        
        <Route exact path="/movie/:id" render={() => (<Movie movie={this.state.movie} />)} />
        <footer className="py-5 text-white">
          <Footer />
        </footer>
      </div>

    )
  }

}

export default App;

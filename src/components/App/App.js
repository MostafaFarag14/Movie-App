import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from '../Header/header'
import { GameList } from '../GameList/gameList'
import { Footer } from '../Footer/footer'
import { MovieList} from '../MovieList/movieList'
const apiKey = '2b2be35c63bf3fe9e48a5ed70ef9a13d'
class App extends React.Component {
  
  // componentDidMount() {
  //   fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
  //     .then(response => response.json())
  //     .then(users => this.setState({ users: users }))
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <div className="cont">
          <GameList />
        </div>
        <footer className="py-5 text-white">
          <Footer />
        </footer>
      </div>
    )
  }

}

export default App;

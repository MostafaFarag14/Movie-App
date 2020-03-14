import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from '../Header/header'
import {GameList} from '../GameList/gameList'
import {Footer} from '../Footer/footer'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.users.map( user => 
          <textarea>{user.name}</textarea>)}
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

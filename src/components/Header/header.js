import React from 'react'

const logo = './assets/img/Capture.PNG'
const search = './assets/img/icons8-search.svg'

export class Header extends React.Component {

  handleSubmit = (e) => {
    let searchInput = document.getElementById('search')
    console.log(searchInput.value)
    this.props.search(searchInput.value)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark shadow rounded sticky-top" style={{backgroundColor:"#494F5C"}}>
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="" height="" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="./index.html">BUNDLES<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CHIOCE</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  STORE</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">ABOUT</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input id="search" className="form-control mr-sm-2 bg-dark border-0 text-white" type="search" placeholder="Search" aria-label="Search" name="search" onChange={this.handleSubmit}/>
              <button className="btn btn-outline-secondary my-2 my-sm-0 border-0" type="button" onClick={this.handleSubmit}><img src={search}/></button>
            </form>
          </div>
          </div>
          
        </nav>
      </>

    )
  }
}
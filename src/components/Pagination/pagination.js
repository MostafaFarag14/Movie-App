import React from 'react'
import './pagination.css'

const pages = ['Prev', '1', 'Next']
export class Pagination extends React.Component {

  handleClick = (e) => {
    this.props.pageNumber(e.target.innerText)
    e.target.parentNode.className = "page-item active"
  }
  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pages.map( page => {
            return(<li className="page-item">
            <a className="page-link" href="#" onClick={this.handleClick}>{page}</a>
          </li>)
            
          })}
        </ul>
      </nav>
    )
  }
}
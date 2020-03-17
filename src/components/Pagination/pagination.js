import React from 'react'
import './pagination.css'
import {Link} from 'react-router-dom'
let pages = ['Prev', '1', '2', '3', '4','Next']
// let cur_page = 1
let expand= true
export class Pagination extends React.Component {
  constructor(){
    super()
    this.state = {
      cur_page : 1,
     
    }
  }

  handleClick = (e) => {
    
    if(e.target.innerText === 'Next'){
      this.state.cur_page +=1 
    }
    else if(e.target.innerText === 'Prev'){
      this.state.cur_page -=1 
    }
    else{
      this.state.cur_page = parseInt(e.target.innerText) 
    }

    this.props.pageNumber(e.target.innerText)
  }
  render() {

for (let index = 1; index < pages.length -1; index++) {
  pages[index] =  this.state.cur_page + index - 1
}
    return (
      <nav >
        <ul className="pagination justify-content-center">
          {pages.map( page => {
            let classHold = 'page-item' ;
            if(parseInt(page) === this.state.cur_page){
              classHold = 'page-item active'
              console.log(classHold)
            }
            if (page === 'Prev' && this.state.cur_page === 1){
              classHold = 'page-item disabled'
            }
            return(<li className={classHold}>
            <a className="page-link" href="#" onClick={this.handleClick}>{page}</a>
          </li>)
            
          })}
        </ul>
      </nav>
    )
  }
}
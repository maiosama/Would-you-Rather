
import React,{Component} from 'react'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"
import {setAuthedUser} from '../actions/authedUser'



 class QuestionNav extends Component {
   render(){
  return (
    <div className='questin-nav'>
      <Nav>
        <Nav.Link as={Link} to={'/questions/unanswered'}>
            <p>Unanswered Questions</p>
          </Nav.Link>
          <Nav.Link as={Link} to={'/questions/answered'}>
            <p>  Answered Questions</p>
          </Nav.Link>
        </Nav>
    </div>
  )}
}


export default QuestionNav
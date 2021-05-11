
import React from 'react'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap"
import {setAuthedUser} from '../actions/authedUser'
import { FaQuestion, FaReply } from "react-icons/fa";
import { connect } from 'react-redux';



 function QuestionNav (props) {
   const {answeredQuestions,unAnsweredQuestions}= props
  return (
    <div className='questin-nav'>
        <Nav.Link as={Link} to='questions'>
           <FaQuestion><p>Unanswered Questions {unAnsweredQuestions}</p></FaQuestion>
          </Nav.Link>
          <Nav.Link as={Link} to='/questions/answered'>
           <FaReply> <p> Answered Questions {answeredQuestions} </p></FaReply>
          </Nav.Link>
    </div>
  )
}

function mapStateToProps ({ questions, authedUser}){

  const answeredQuestions = Object.keys(questions).filter((questionId)=>
  questions[questionId].optionOne.votes.includes(authedUser)||
  questions[questionId].optionTwo.votes.includes(authedUser))
  
  const unAnsweredQuestions = Object.keys(questions).filter((questionId)=>
  !questions[questionId].optionOne.votes.includes(authedUser)&&
  !questions[questionId].optionTwo.votes.includes(authedUser))

  return{
      answeredQuestions,unAnsweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionNav)
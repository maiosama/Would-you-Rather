import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect,Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap"
import QuestionNav from './QuestionNav'
import QuestionList from './QuestionList'
import { Fragment } from 'react';


class QuestionPage extends Component{
    render(){
        const {answeredQuestions, unAnsweredQuestions}= this.props

        return(
            <React.Fragment>
                {this.props.authedUser === null?(
                    <Route>
                        <Redirect to='/Login'/>
                    </Route> 
                ):(
                    <div className='question'>
                        <QuestionNav/>
                        <Switch>
                                {/* <Route exact path = 'questions'>
                                    <Redirect to='unanswered'/>
                                </Route> */}
                                
                                <Route exact path={'/questions/answered'}>
                                    <QuestionList questions={answeredQuestions}/>
                                </Route>
        
                                <Route exact path={'/questions/unanswered'}>
                                    <QuestionList questions={unAnsweredQuestions}/>
                                </Route>
                                
                        </Switch>
                    
                    </div>)}
            </React.Fragment>
            
        )
    }
}
QuestionPage.propTypes={
    answeredQuestions:PropTypes.array.isRequired,
    unAnsweredQuestions: PropTypes.array.isRequired
}

function mapStateToProps ({ questions, authedUser, users}){
    console.log("questions:", questions)
    const answeredQuestions = Object.values(questions).filter((question) =>question.optionOne.votes
    .includes(authedUser) || question.optionTwo.votes.includes(authedUser)).sort((a,b)=> b.timestamp - a.timestamp)
    
    const unAnsweredQuestions = Object.values(questions).filter((question) =>!question.optionOne.votes
    .includes(authedUser) && !question.optionTwo.votes.includes(authedUser)).sort((a,b)=> b.timestamp - a.timestamp)
    
    
    console.log("answered list", answeredQuestions)
    console.log("unanswerd list", unAnsweredQuestions)
  
    return{
        answeredQuestions,unAnsweredQuestions
    }
  }
  

export default connect(mapStateToProps)(QuestionPage)



// Answered Questions {answeredQuestionsList.map((question)=>(<QuestionDetail key={question} question={question}/>))}
// UnAnswred Questions{unAnsweredQuestionsList.map((question)=>(<QuestionDetail key={question} question = {question}/>))}

// .map((question)=> question.id)
// .sort((a,b)=> b.timestamp - a.timestamp)

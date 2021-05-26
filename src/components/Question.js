import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter, Redirect} from 'react-router-dom'
import QuestionAnswer from './QuestionAnswer'
import QuestionUnanaswer from './QuestionUnanswer'
import {Card} from 'react-bootstrap'

class Question extends Component {

    render(){
        const { users, hasAnswered, authedUser, questions, question } = this.props;
        const {optionOne, optionTwo} = question
        const user=users[question.author]
        if (this.props.notFound){<Redirect to='not-found'/>}
        return(
            <Card style={{ width: '22rem',padding:10, margin: 15 }} to ={`/question/${this.props.id}`} className ='question'>
                <Card.Img
                    src = {user.avatarURL}
                    className="img-card"
                    alt = {`Avatar of ${user.name}`}
                    className = 'avatar'
                />
                <Card.Body className = 'question-info'>
                    <div>
                        <Card.Title> {user.name} </Card.Title>
                        <div> Would you Rather</div>
                        {hasAnswered && (
                            <QuestionAnswer question={question} authedUser={authedUser.authedUser}/>

                        )}
                        {!hasAnswered &&(
                            <QuestionUnanaswer question={question}/>
                        )}                         
                    </div>
                </Card.Body>    
            </Card>
        )
    } 
    }

function mapStateToProps ({ questions, authedUser,users },{match}){
    const id=match.params.id
    const question = questions[id]
    console.log("question is:", question)
    const notFound = question === undefined
    const hasAnswered = question.optionOne.votes.includes(authedUser.authedUser) || question.optionTwo.votes.includes(authedUser.authedUser)

    return{
        authedUser,
        question,
        users,
        notFound,
        hasAnswered
    }
}

export default withRouter(connect(mapStateToProps)(Question))



import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter, Redirect} from 'react-router-dom'
import QuestionAnswer from './QuestionAnswer'
import QuestionUnanaswer from './QuestionUnanswer'
import {Card} from 'react-bootstrap'

class Question extends Component {
    
    render(){
        if(this.props.notFound)  {
        return <Redirect to="/not-found"/>}
        const { users, hasAnswered, authedUser, questions, question } = this.props;
        const {optionOne, optionTwo} = question
        const user=users[question.author]
        
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
                            <QuestionAnswer question={question} authedUser={authedUser}/>

                        )}
                        {!hasAnswered &&(
                            <QuestionUnanaswer question={question} authedUser={authedUser}/>
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
    const notFound =true
    if (question === undefined){
        // notFound=true
        return {notFound}
    }
    console.log("question is:", question)
    const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)

    return{
        authedUser,
        question,
        users,
        hasAnswered
    }
}

export default withRouter(connect(mapStateToProps)(Question))



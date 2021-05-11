import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'
import {Link, withRouter, Redirect} from 'react-router-dom'
import { Button, Card } from "react-bootstrap";


class Question extends Component {
    state={
        answer:''
    }
    handleSubmit= (event)=>{
        event.preventDefault()
        const {question, dispatch} = this.props
        dispatch(handleAnswerQuestion(question.id, this.state.answer))
        console.log('handlesubmit question', question)
    }
    handleChange = (event)=>{
        event.preventDefault();
        const {answer}= this.state
        this.setState(event.target.value)

    }
    render(){
        const { users, answered, authedUser, questions, question } = this.props;
        // const {optionOne, optionTwo} =  question
        const user=users[authedUser]
        
        // const votes= this.question.optionOne.votes.length+ question.optionTwo.votes.length
        console.log('question', questions)
        return(
            <div></div>

            
        
    
            // <Link to ={`/question/${this.props.id}`} className ='question'>
            //     <img
            //         src = {this.props.avatarURL}
            //         alt = {`Avatar of ${this.props.author}`}
            //         className = 'avatar'
            //     />
            //     <div className = 'question-info'>
            //         <div>
            //             <span> {author} </span>
            //             <div> Would you Rather</div>
                        
            //                 <button className = 'option-one' >
            //                     {optionOne}
            //                 </button>
            //                 <button onSubmit ={this.handleSubmit}  className = 'option-two' >
            //                     {optionTwo}
            //                 </button>
                        
            //         </div>
            //     </div>    

                

            // </Link>
        )

    }

   
  
    
    }

function mapStateToProps ({ questions, authedUser,users },{id}){
    const question = questions[id]
    // const notFound = question === undefined
 

    return{
        id,
        authedUser,
        question,
        users
        
    }
    

}



export default withRouter(connect(mapStateToProps)(Question))



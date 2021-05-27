import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/questions'
import {Form, Button} from 'react-bootstrap'


class QuestionUnanaswer extends Component{
    state={
        answer:''
    }
    handleSubmit= (event)=>{
        event.preventDefault()
        const { questions,question:{id:qid}, dispatch, authedUser} = this.props
        // const {qid}=question
        const{answer}=this.state
        dispatch(handleAnswerQuestion(qid,answer, authedUser))
        console.log("qid: ", qid, "answer:", answer, authedUser);
    }
    handleChange = (event)=>{
        event.preventDefault();
        const {answer}= this.state
        this.setState({answer: event.target.value})

    }
    render(){
        const {question,authedUser} = this.props
        const{votes}=question
        const {answer} = this.state
        console.log(question[votes])

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Check type="radio" id="optionOne" name="option" value='optionOne'  onChange={this.handleChange}
                label ={question.optionOne.text} />
                <Form.Check type="radio" id="optionTwo" name="option" value='optionTwo' onChange={this.handleChange} 
                label={question.optionTwo.text} />
                <Button variant="primary" type="submit" value="Submit Vote" className="voteBtn"> Submit</Button>
            </Form>

        )
    }
}

export default connect()(QuestionUnanaswer)

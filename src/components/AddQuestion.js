import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import {Form, Col, Button, Card} from 'react-bootstrap'
import{CardBody, CardTitle} from 'reactstrap'
import { Redirect } from "react-router-dom";
import { formatQuestion } from '../utils/_DATA'


class AddQuestion extends Component {
   

    state = {
        optionOne: '',
        optionTwo: '',
        redirect: false
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({optionOne: event.target.value, optionTwo: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDafault()
        const {dispatch, authedUser: author}= this.props
        const {optionOne, optionTwo} = this.state
        dispatch(handleAddQuestion(optionOne, optionTwo, author))
        this.setState({redirect: true})
        console.log("add question", this.props)
       
    }
    

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Would You Rather</CardTitle>
                        <Form.Group onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Label column="lg" lg={2}>
                                    <input
                                     type = 'text'
                                    //  value={optionOne}
                                     onChange={this.handleChange.optionOne}
                                     placeholder='option one'/>
                                </Form.Label>
                            </Form.Row>
                            <br/>
                            <Form.Row>
                                <Form.Label column="lg" lg={2}>
                                <input
                                     type = 'text'
                                    //  value={optionTwo}
                                     onChange={this.handleChange.optionTwo}
                                     placeholder='option two'/>
                                </Form.Label>

                            </Form.Row>
                            <br/>
                            <Col xs="auto">
                                <Button type="submit" className="mb-2">
                                    Submit
                                </Button>
                            </Col>

                        </Form.Group>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

function mapStatetoProps(question, users , authedUser){
  return{
   
      authedUser,
      question: question? formatQuestion(question, users[question.author], authedUser): null
  }
}

export default connect(mapStatetoProps)(AddQuestion)
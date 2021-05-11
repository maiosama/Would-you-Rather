import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import PropTypes from "prop-types";


class QuestionDetail extends Component{
    render(){
        const {user, question}= this.props
        const{id, optionOne, type} = this.props 
        return(
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={user.avatarURL} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        Asks Would you Rather?               
                    </Card.Text>
                     <Button variant="primary" >{optionOne.text}</Button>
                </Card.Body>
            </Card>

        )
    }
}

QuestionDetail.propTypes={
    user : PropTypes.object.isRequired,
    question : PropTypes.object.isRequired
}

function mapStateToProps({users, questions},{id}){
    const question = questions[id]
    return {
      user : users[question.author],
      question
    }
  }
  
export default withRouter(connect(mapStateToProps)(QuestionDetail))
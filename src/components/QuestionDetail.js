import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import PropTypes from "prop-types";


class QuestionDetail extends Component{
    render(){
        const {user}= this.props
        console.log ("user:", user)
        const{id, optionOne, type} = this.props.question
        return(
            
                <Card style={{ width: '18rem',padding:10, margin: 15 }}>
                    <Card.Title>{user.name} Asks</Card.Title>
                    <Card.Img variant="top" className="img-card" src={user.avatarURL} />
                    <Card.Body>
                        <Card.Title>would you rather?</Card.Title>
                        <Card.Text>{optionOne.text}</Card.Text>
                        <Link to={`/question/${id}`}>
                            <Button variant="primary">View question?</Button>
                        </Link>
                    </Card.Body>
                </Card>

        )
    }
}

QuestionDetail.propTypes={
    user : PropTypes.object.isRequired,
    question : PropTypes.object.isRequired
}

function mapStateToProps({ questions, users },{question}) {
    const user = users[question.author]
    return {
        user,
      question,
      
    }}
  
    
export default withRouter(connect(mapStateToProps)(QuestionDetail))
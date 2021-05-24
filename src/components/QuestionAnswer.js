import React, {Component} from 'react'
import {connect} from 'react-redux'
import{Card, Button, Badge, ProgressBar,ListGroup} from 'react-bootstrap'


class QuestionAnswer extends Component{
    // votePercentage = (votes, allVotes)=>{
    //     return Math.round((votes/allVotes)*100)
    // }

    render(){
        const {question, authedUser}=this.props
        const allVotes= question.optionOne.votes.length+ question.optionTwo.votes.length
        const votesOptionOne = question.optionOne.votes.length
        const votesOptionTwo = question.optionTwo.votes.length
        const optionOnePercentage = Math.round((votesOptionOne/allVotes)*100)
        const optionTwoPercentage =Math.round((votesOptionTwo/allVotes)*100)
        const voteOption1 = question.optionOne.votes.includes(authedUser)
        const voteOption2 = question.optionTwo.votes.includes(authedUser)

        return(

            <Card style={{ width: '18rem' }}>
                <ListGroup variant="list-group-flush">
                    <ListGroup.Item>{question.optionOne.text}
                    <div>{ voteOption1 &&
                    (<Badge variant="primary">Your Vote</Badge>)}</div>
                    <ProgressBar variant="info" now ={optionOnePercentage} label={optionOnePercentage} />
                    </ListGroup.Item>
                    <ListGroup.Item>{question.optionTwo.text}
                    <div>{ voteOption2 &&(
                    <Badge variant="primary">Your Vote</Badge>)}</div>
                    <ProgressBar variant="info" now ={optionTwoPercentage} label={optionTwoPercentage} /></ListGroup.Item>
                </ListGroup>
            </Card>
            

        )
    }
}

export default connect()(QuestionAnswer)
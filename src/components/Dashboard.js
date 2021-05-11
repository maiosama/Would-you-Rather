import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionDetail from './QuestionDetail'

class Dashboard extends Component{
    render(){
        const {user} = this.props
        // const {id, optionOne, optionTwo, type} = this.props.question
        return (
            
            <div className= 'question'>
                <QuestionDetail/>
                
            </div>
        )
    }
}


export default connect()(Dashboard)
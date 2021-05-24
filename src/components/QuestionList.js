import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import QuestionDetail from './QuestionDetail'

class QuestionList extends Component{
    render(){
        const {questions}=this.props
        console.log("Question List", questions)
        return(
            <div>
                {questions.length > 0 ? (
                questions.map((question) =><QuestionDetail key={question.id} question = {question}/>)
                ) : (
                    <p >Great, you answered all the questions</p>
                )}
            </div>
            
        )
    }
}
    QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
  };

function mapStateToProps({questions}, {question}){
    return{
        questions,
        question
    }
}

export default QuestionList
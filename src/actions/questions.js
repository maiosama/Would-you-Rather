import {saveQuestion} from '../utils/api'
import { saveQuestionAnswer} from '../utils/api'
import {userAddQuestion, userAnswerQuestion} from './users'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION ='ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question
  }
}

function answerQuestion({authedUser, qid, answer}){
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAddQuestion (optionOneText, optionTwoText, author){
  return (dispatch)=>{
    dispatch(showLoading())
    return saveQuestion({ optionOneText, optionTwoText, author})
    .then((question)=>{
      console.log("your new question", question)
      dispatch(userAddQuestion({authedUser: author, qid :question.id}))
      dispatch(addQuestion(question))
      dispatch(hideLoading()).catch((e) => {
        console.warn("Error adding the question", e);
      });
    })
  }
}

export function handleAnswerQuestion({qid, answer}){
  return (dispatch, getState)=>{
    dispatch(showLoading())
    const {authedUser} = getState();
    return saveQuestionAnswer({ authedUser, qid, answer})
    .then (()=>{
      dispatch(userAnswerQuestion({ authedUser, qid, answer}))
      dispatch(answerQuestion({authedUser, qid, answer}))
      dispatch(hideLoading()).catch((e) => {
        console.warn("Error adding answer to the question", e);
      });
    })
  }
}

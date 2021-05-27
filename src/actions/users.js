import {setAuthedUser} from './authedUser'
import {saveNewUser} from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'
export const ADD_NEW_USER ="ADD_NEW_USER"


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function userAddQuestion ({authedUser, qid}){
  return {
    type: USER_ADD_QUESTION,
    authedUser,
    qid
  }
}

export function userAnswerQuestion ({authedUser, qid, answer}){
  return{
    type: USER_ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}
function addNewUser(user){
  return{
    type: ADD_NEW_USER,
    user
  }
}
export function handleAddUser(id, name, avatarURL){
  return(dispatch)=>{
    dispatch(showLoading());
    dispatch(addNewUser({id, name, avatarURL}));
    dispatch(setAuthedUser(id));
    return saveNewUser({id, name, avatarURL})
    .then(()=>
    dispatch(hideLoading()))
  }

}
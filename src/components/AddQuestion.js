import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion} from '../actions/questions'
import {Button} from 'react-bootstrap'
import { Redirect } from "react-router-dom";


class AddQuestion extends Component {
   

    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }
    handleOptionOne = (event) => {
        event.preventDefault()
        this.setState({optionOneText: event.target.value})
    }
    handleOptionTwo=(event)=>{
        event.preventDefault()
        this.setState({optionTwoText: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const {dispatch,author}= this.props
        const {optionOneText, optionTwoText} = this.state
        dispatch(handleAddQuestion(optionOneText, optionTwoText, author))
        this.setState({toHome: true})
        console.log("add question", event)
       
    }
 
    
    

    render() {
        if (this.state.toHome) {
            return <Redirect to='/'/>
        }
        return (
            <div className='center add-page'>
                <h3>Add new question</h3>

                <form >
                    <h5>Would you rather?</h5>
                    <input 
                    placeholder='option one'
                    value={this.state.optionOneText}
                    onChange={this.handleOptionOne}
                    className='input'
                    maxLength={100}/>
                    <p>Or</p>
                    <input 
                    placeholder='option two'
                    value={this.state.optionTwoText}
                    onChange={this.handleOptionTwo}
                    className='input'
                    maxLength={100}/>
                    <br/>
                    <button onClick={this.handleSubmit}> 
                        click me to test</button>
                    
                   

                </form>
                
            </div>
        )
    }
}

function mapStatetoProps({authedUser},{author}){
  return{
   
    author:authedUser,
  }
}
// const mapDispatchToProps= dispatch=>{
//     return{
//         handleAddQuestion:(optionOne, optionTwo, authedUser)=>{
//             handleAddQuestion(optionOne, optionTwo, authedUser)(dispatch)
//         }
//     }
// }


export default connect(mapStatetoProps)(AddQuestion)

                    // variant="primary"
                    // className='btn'

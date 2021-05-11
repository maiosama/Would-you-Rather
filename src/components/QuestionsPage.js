import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionPage extends Component{
    render(){
        const {qid, votes} = this.props
        return(
            <div>
                <Question id={qid}/>
            </div>
            
        )
    }
}

export default connect()(QuestionPage)
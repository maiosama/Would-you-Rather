import '../App.css';
import React, {Component} from 'react'
import {BrowserRouter , Route, Redirect, Switch} from 'react-router-dom'
import LoadingBar from "react-redux-loading";
import { Button, Spinner } from "react-bootstrap";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import AddQuestion from './AddQuestion'
import Login from './Login'
import Question from './Question'
import MainNavbar from './MainNavbar'
import The404 from './The404'
import QuestionsPage from './QuestionsPage'
import Leaderboard from './Leaderboard'

class App extends Component {
      

  componentDidMount(){
    const{dispatch}= this.props
    dispatch(handleInitialData());
  
    
  }
  render (){    
  console.log('autheduser', this.props.authedUser)
    return (
      <div className='App'>
        {this.props.loading? (
                <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
              ):( 
                <div>
                  {this.props.loggedOut ? 
                  (<Login/>) :
                    
                  (<BrowserRouter>
                    <MainNavbar/>
                      <Switch>
                        <Route exact path ='/questions/unanswered'>
                          <Redirect to="questions" />
                        </Route>
                        <Route path='/questions/unanswered'>
                          <QuestionsPage/>
                        </Route>
                        <Route path ='/add'>
                          <AddQuestion/>
                        </Route>
                        <Route path ='/leaderboard'>
                          <Leaderboard/>
                        </Route> 
                        <Route path="/question/:id">
                          <Question />
                        </Route>
                        <Route path="/not-found">
                          <The404 />
                        </Route>
                        
                      </Switch>
                      
                </BrowserRouter>)}
                </div>
              )}

      </div>
    
    
    
    )

  }


}

function mapStateToProps ({ authedUser}){
  return {
    loggedOut: authedUser==='loggedOut',
    loading: authedUser===null,
  }
}

export default connect(mapStateToProps)(App);

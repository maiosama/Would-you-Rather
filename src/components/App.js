import '../App.css';
import React, {Component, Fragment} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import { Button, Spinner } from "react-bootstrap";
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard';
import AddQuestion from './AddQuestion'
import Login from './Login'
import Question from './Question'
import MainNavbar from './MainNavbar'
import The404 from './The404'
import QuestionNav from './QuestionNav'
import Leaderboard from './Leaderboard'

class App extends Component {

  state={
    loading : false,
    authedUser: null
  }
 componentDidMount(){
    const{dispatch}= this.props
    dispatch(handleInitialData());
    this.setState({loading: true})
    
  }
  render (){
   
    return (
      <div className='App'>
        <BrowserRouter>
        {this.state.authedUser=== null?
        <Route path='/login'>
          <Login/>
        </Route>:
          <MainNavbar/>}
              {this.state.loading?
              (<div className= 'app-container'>
            
                <Route exact path ='/'>
                  <Dashboard/>
                </Route>
                <Route path='/Question'>
                  <QuestionNav/>
                </Route>
                <Route path ='/add'>
                  <AddQuestion/>
                </Route>
                <Route path ='/leaderboard'>
                  <Leaderboard/>
                </Route> 
                <Route path="/question/:questionID">
                <Question />
              </Route>
              <Route path="/not-found">
                <The404 />
              </Route>
              </div>)
              :(
                <div>
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
              </div>
              )}
        </BrowserRouter>
      </div>
    )
  }
  
}
function mapStateToProps ({ authedUser, dispatch}){
  return {

     authedUser: authedUser===null,
     dispatch
  }
}

export default connect(mapStateToProps)(App);

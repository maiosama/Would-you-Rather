import '../App.css';
import React, {Component} from 'react'
import {BrowserRouter , Route, Redirect} from 'react-router-dom'
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

  // state={
  //   loading : false,
  //   authedUser: null
  // }

 componentDidMount(){
    const{dispatch}= this.props
    dispatch(handleInitialData());
    // this.setState({loading: true})
    
  }
  render (){
    const requireLogin = (to, from, next) => {
      if (to.meta.auth) {
        if (this.props.authedUser) {
          next();
        }
        next.redirect('/login');
      } else {
        next();
      }
    };
    
   
    return (
      <div className='App'>
        <BrowserRouter>
        {this.props.loggedOut ?
            (
              <Login/>)
            :
          (<BrowserRouter>
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
            
              ):(<MainNavbar/>)}
            
              
              <Switch>
            
                <Route exact path ='/'>
                  <Redirect to="questions" />
                </Route>
                <Route path='/questions'>
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
                {/* <Route path ="/login">
                  <Login/>
                </Route> */}
              </Switch>
              
        </BrowserRouter>)}
        </BrowserRouter>
      </div>
    )
  }
  
}
function mapStateToProps ({ authedUser, dispatch}){
  return {

    loggedOut: authedUser==='loggedOut',
    loading: authedUser===null,
  }
}

export default connect(mapStateToProps)(App);

import React,{Component} from 'react'
import { Link,withRouter, } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'


 class MainNavbar extends Component{
  handleLogout=(event)=>{
    event.preventDefault()
    const {dispatch}=this.props
    dispatch(setAuthedUser('loggedOut'))
    this.props.history.push(`/`)
  }

   render(){
     const{authedUser, users}=this.props
     const userName=users[authedUser.authedUser].name
     console.log(userName)
    return(
      <div>
    <Navbar bg="light" variant="pills">
      <Navbar.Brand as={Link} to="/">
        Would you Rather?
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/questions">
            Questions
        </Nav.Link>
        <Nav.Link as={Link} to="/leaderboard">
          Leaderboard
        </Nav.Link>
        <Nav.Link as={Link} to="/add">
          Add Question
        </Nav.Link>
      </Nav>
      <Nav className="justify-content-end welcome-message">
        Welcome,{userName}
      </Nav>
      <Nav.Link variant ='primary' onClick={this.handleLogout}>LogOut </Nav.Link>
    </Navbar>
  </div>
    )
   }  
    
}

function mapStateToProps({authedUser,users}){
  return{
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(MainNavbar))

import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter,Link } from "react-router-dom";
import { setAuthedUser } from '../actions/authedUser'
import giphy from '../giphy.gif'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button} from 'react-bootstrap';


class Login extends Component{
    state ={
        authedUser :' ',
    }

    handleUser= (user)=>{
      const authedUser = user.target.value
      this.setState({authedUser}) 
    }
    handleLogin=(event)=>{
      event.preventDefault();
      const {dispatch}=this.props
      const {authedUser}= this.state
      dispatch(setAuthedUser({authedUser}))
      console.log('authed user will be:', authedUser)
    }
    render(){
      
        const {users}=this.props
        const{ authedUser}= this.state
      
        return(
          <div className='center'>
            <div>
              <img 
              src= {giphy}
              alt='game logo'/>
              <h2> Welcom to our game. Please select a user </h2>
            </div>
            
            
                <FormControl className='formControl'>
                  <InputLabel id="demo-controlled-open-select-label">User</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    
                    value={authedUser}
                          onChange={this.handleUser}
                          color="secondary"
                        >
                          {users &&
                            Object.keys(users)
                              .map((userId) => ({
                                avatarURL: users[userId].avatarURL,
                                id: users[userId].id,
                                name: users[userId].name,
                              }))
                              .map((user) => (
                                <MenuItem key={user.id} value={user.id}>
                                  <img
                                    src={user.avatarURL}
                                    alt={`${user.name} avatar`}
                                    width="30"
                                  />{``}
                                  {user.name}
                                </MenuItem>
                              ))}
                        </Select>
                        <Link to ='/'>
                          <Button variant="primary" onClick={this.handleLogin}>
                            Login
                          </Button>
                        </Link>
                </FormControl>
            </div>
        
            )
    }
    
}

function mapStateToProps({users}){
  return{
    users
    
  }
}




export default  withRouter(connect(mapStateToProps)(Login))

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Player from './Player'

class Leaderbord extends Component {
    render() {
        const {players}= this.props
       
        return (
            <div className= "center">
                {players.map((player)=>(
                    <Player key = {player.id} player={player}/>
                ))}
            </div>

        )
    }
}

function mapStatesToProps({users}){
    const players= Object.values(users).map((user)=>
    Object.assign({}, user,{
        points: Object.keys(user.answers).length+ user.questions.length
    })).sort((a,b)=> b.points-a.points)
    return{
        players
    }
}

export default connect(mapStatesToProps)(Leaderbord)
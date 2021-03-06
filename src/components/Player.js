import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

export default function Player (props){
    const {name, answers, questions, avatarURL, points} = props.player   
    console.log('Players: ', props.player)

    return(
        <div className='container'>
       
            <Card className= "justify-content-center" border="secondary" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                     Question Asked: {questions.length}
                    </Card.Text>
                    <Card.Text>
                       Question Answered: {Object.keys(answers).length}
                    </Card.Text>
                    <Card.Text>
                        Score: {points}
                    </Card.Text>
                </Card.Body>
             </Card>
        </div>

    )
}

Player.propTypes ={
    player:PropTypes.object.isRequired
}
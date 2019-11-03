import React from 'react'
import { Col, CardPanel } from 'react-materialize';
import './GamePiece.css'

const GamePiece = props => (
    <Col s={12} m={4} l={3}>
        {/* card: {props.icon} */}
        <CardPanel onClick={() => props.clickHandler(props.icon)} className={"hoverable teal lighten-4 black-text center" + (props.correct === false ? " shake" : "")}>
            <img alt={props.name} src={props.icon}/>
        </CardPanel>
    </Col>
)

export default GamePiece
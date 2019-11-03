import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import GamePiece from './components/GamePiece';
import Nav from './components/Nav/Nav';

const dog1 = require ('./images/dog1.jpg');
const dog2 = require ('./images/dog2.jpg');
const dog3 = require ('./images/dog3.jpg');
const dog4 = require ('./images/dog4.jpg');
const dog5 = require ('./images/dog5.jpg');
const dog6 = require ('./images/dog6.jpg');
const dog7 = require ('./images/dog7.jpg');
const dog8 = require ('./images/dog8.jpg');

class App extends Component {
    state = {
        icons: [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8].sort(this.randomize),
        clicked: [],
        score: 0,
        highScore: 0,
        correct: undefined,
        gameWon: false
    }

    randomize = (a, b) => Math.random() > .5 ? -1 : 1

    clickHandler = iconName => {
        console.log(iconName)
        if (this.state.clicked.indexOf(iconName) === -1) {
            let score = this.state.score + 1,
                clicked = [...this.state.clicked, iconName]
            console.log(score)
            console.log(clicked)

            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: clicked,
                score: score,
                highScore: Math.max(this.state.highScore, score),
                correct: true,
                gameWon: score === this.state.icons.length
            })
        } else {
            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [],
                score: 0,
                correct: false,
                gameWon: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Nav correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
                    <Row>
                        <Col s={12}>
                            <CardPanel>
                                <p>Click on an dog to earn points, but don't click the same dog more than once!</p>
                            </CardPanel>
                        </Col>
                    </Row>
                </div>
                <div className="container">
                    
                    <Row>
                        {this.state.icons.map((icon,index) => <GamePiece correct={this.state.correct} key={index} icon={icon} clickHandler={this.clickHandler} />)}
                    </Row>
                </div>
            </div>
        )
    }
}
export default App
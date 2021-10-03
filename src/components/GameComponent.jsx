import React, { Component } from 'react';
import { GAMEDATA } from '../shared/gamedata';
import '../custom_css/Game.css';

const Story = (props) => {
    return (
        <React.Fragment>
            <h4>{props.data[props.currentSection].title}</h4>
            <p>
                {props.data[props.currentSection].story[props.storyProgress]}
            </p>
        </React.Fragment>
    );
}

const Actions = (props) => {
    return (
        <React.Fragment>
            <h4>Actions:</h4>
        </React.Fragment>
    );
}

class GameComponent extends Component {
    state = {
        gamedata: GAMEDATA,
        currentStory: 0,
        gameProgression: 0,
        chosenAction: null
    };

    progressStory = () => {
        this.setState({ currentStory: this.state.chosenAction });
    };

    progressGame = () => {
        this.setState({ gameProgression: this.state.gameProgression + 1})
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="characterActions col-5">
                            <h4>{this.props.adventurer.name}</h4>
                            <Actions />
                        </div>
                        <div className="story col-5">
                            <Story data={this.state.gamedata} storyProgress={this.state.currentStory} currentSection={this.state.gameProgression} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GameComponent;
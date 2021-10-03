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

//***Thought: do i need seperate functions one to display the action list and another for when a action is clicked?
const Actions = (props) => { //***ToDo: Need to iterate through action object to create UL of all actions

    const actionChoices = props.data[props.currentSection].action.map(actionOption => { //***Thought: this may need to be moved to the default component (see playercomponent for example)
        return (
            <div key={actionOption.id} className="col-sm-4">
                <RenderAdventurerOptions adventurer={playerOption} onClick={props.onClick} />
            </div>
        )
    });

    return (
        <React.Fragment>
            <h4>Actions:</h4>
            <ul>
                <li>
                    {props.data[props.currentSection].action}
                </li>
            </ul>
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
        this.setState({ gameProgression: this.state.gameProgression + 1});
    };

    actionChoice = (choice) => {
        this.setState({ chosenAction: choice});
    };

    render() {
        return ( //***ToDo: create cards inside col div's for adventurer, actions, and story (maybe have a bottom card for interactions?)
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="characterActions col-5">
                            <h4>{this.props.adventurer.name}</h4>
                            <Actions
                                data={this.state.gamedata}
                                storyProgress={this.state.currentStory}
                                currentSection={this.state.gameProgression}
                                actionChoice={this.actionChoice}
                                progressStory={this.progressStory}
                                progressGame={this.progressGame}
                            />
                        </div>
                        <div className="story col-5">
                            <Story
                                data={this.state.gamedata}
                                storyProgress={this.state.currentStory}
                                currentSection={this.state.gameProgression}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GameComponent;
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { GAMEDATA } from '../shared/gamedata';
import '../custom_css/Game.css';

const Story = (props) => {
    return (
        <CardBody>
            <CardTitle tag="h4">{props.data[props.currentSection].title}</CardTitle>
            <CardText>
                {props.data[props.currentSection].story[props.storyProgress]}
            </CardText>
        </CardBody>
    );
}

//***Thought: do i need seperate functions one to display the action list and another for when a action is clicked?
const Actions = ({options}) => {

    return (
        <React.Fragment>
            {options.type}
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

    actionChoices = this.state.gamedata[this.state.gameProgression].actions.map(actionOption => {
        return (
            <li key={actionOption.id}>
                <Actions options={actionOption} />
            </li>
        )
    });

    render() {
        return ( //***ToDo: create cards inside col div's for adventurer, actions, and story (maybe have a bottom card for interactions?)
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-5">
                            <Card outline color="secondary">
                                <CardBody>
                                    <CardTitle tag="h4">{this.props.adventurer.name}</CardTitle>
                                    <CardSubtitle tag="h6">{this.props.adventurer.race}{":  "}{this.props.adventurer.class}</CardSubtitle>
                                </CardBody>
                                <CardBody>
                                    <CardTitle tag="h4">Actions:</CardTitle>
                                    <ul>
                                        {this.actionChoices} {/*ToDo: Setup onClick for action selection (see player/route components)*/}
                                    </ul>
                                </CardBody>
                            </Card>
                            {/* <Actions
                                data={this.state.gamedata}
                                storyProgress={this.state.currentStory}
                                currentSection={this.state.gameProgression}
                                actionChoice={this.actionChoice}
                                progressStory={this.progressStory}
                                progressGame={this.progressGame}
                            /> */}
                        </div>
                        <div className="col-5">
                            <Card outline color="secondary">
                                <Story
                                    data={this.state.gamedata}
                                    storyProgress={this.state.currentStory}
                                    currentSection={this.state.gameProgression}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GameComponent;
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { GAMEDATA } from '../shared/gamedata';
import '../custom_css/Game.css';

const Story = (props) => {
    return (
        <CardBody>
            <CardTitle tag="h4">{props.data[props.currentArea].title}</CardTitle>
            <CardText>
                {props.data[props.currentArea].story[props.currentStory]}
            </CardText>
        </CardBody>
    );
}

//***Thought: do i need seperate functions one to display the action list and another for when a action is clicked?
const Actions = ({area, onClick}) => {
    return (
        area.actions.map(actionOption => {
            return(
                <li key={actionOption.id} >
                    {/* {actionOption.type} */}
                    <button onClick={() => onClick(actionOption)}>{actionOption.type}</button>
                </li>
            );
        })
    );
}

class GameComponent extends Component {
    state = {
        gamedata: GAMEDATA,
        activeStory: 0,
        activeArea: 0,
        actionResponce: null
    };

    actionChoice(choice) {
        console.log(choice);
        this.setState({ activeStory: choice.responce});
        this.setState({ activeArea: choice.progression});
        console.log(this.state.activeArea);
        console.log(this.state.activeStory);
    };

    

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
                                    {/* <Actions area={this.state.gamedata[this.state.activeArea]} /> */}
                                    <Actions area={this.state.gamedata[this.state.activeArea]} onClick={selectedChoice => this.actionChoice(selectedChoice)}/> {/* ToDo: Setup onClick for action selection (see player/route components) */}
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-5">
                            <Card outline color="secondary">
                                <Story
                                    data={this.state.gamedata}
                                    currentStory={this.state.activeStory}
                                    currentArea={this.state.activeArea}
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
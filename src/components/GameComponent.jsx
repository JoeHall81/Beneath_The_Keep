import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardDeck } from 'reactstrap';
import { GAMEDATA } from '../shared/gamedata';
import '../custom_css/Game.css';

const Story = (props) => {
    return (
        <CardBody>
            <CardTitle tag="h4">{props.data[props.currentArea].title}</CardTitle>
            <CardText className="noWrapTest">
                {props.data[props.currentArea].story[props.currentStory]}
            </CardText>
        </CardBody>
    );
}

const Actions = ({area, onClick}) => {
    return (
        area.actions.map(actionOption => {
            return(
                <li key={actionOption.id} >
                    <button className="btn btn-link" onClick={() => onClick(actionOption)}>{actionOption.type}</button>
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
        console.log(choice.response);
        console.log(choice.progression);
        this.setState({ activeStory: choice.response});
        this.setState({ activeArea: choice.progression});
    };

    

    render() {
        return ( //***ToDo: create cards inside col div's for adventurer, actions, and story (maybe have a bottom card for interactions?)
            <React.Fragment>
                <div className="container">
                    <CardDeck>
                        <Card outline color="secondary">
                            <Story
                                data={this.state.gamedata}
                                currentStory={this.state.activeStory}
                                currentArea={this.state.activeArea}
                            />
                        </Card>
                        <Card outline color="secondary">
                        <CardBody>
                                <CardTitle tag="h4">{this.props.adventurer.name}</CardTitle>
                                <CardSubtitle tag="h6">{this.props.adventurer.race}{":  "}{this.props.adventurer.class}</CardSubtitle>
                            </CardBody>
                            <CardBody>
                                <CardTitle tag="h4">Actions:</CardTitle>
                                <ul>
                                <Actions
                                    area={this.state.gamedata[this.state.activeArea]}
                                    onClick={selectedChoice => this.actionChoice(selectedChoice)}
                                />
                                </ul>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </React.Fragment>
        );
    }
}

export default GameComponent;
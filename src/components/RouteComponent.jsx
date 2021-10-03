import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';
import PlayerComponent from './PlayerComponent';
import GameComponent from './GameComponent';
import { ADVENTURERS } from '../shared/adventurers'

class RouteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventurers: ADVENTURERS,
            selectedAdventurer: null
        };
    }

    onAdventurerSelect(adventurerId) {
        this.setState({selectedAdventurer: adventurerId});
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Welcome" render={() => <WelcomeComponent />} />
                    <Route exact path="/Player" render={() => <PlayerComponent adventurers={this.state.adventurers} onClick={adventurerId => this.onAdventurerSelect(adventurerId)}/>} />
                    <Route exact path="/Game" render={() => <GameComponent adventurer={this.state.adventurers.filter(adventurer => adventurer.id === this.state.selectedAdventurer)[0]}/>} />
                    <Redirect to="/Welcome" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;
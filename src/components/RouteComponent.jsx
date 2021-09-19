import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';
import PlayerComponent from './PlayerComponent';
import GameComponent from './GameComponent';

class RouteComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Welcome" render={() => <WelcomeComponent />} />
                    <Route exact path="/Player" render={() => <PlayerComponent />} />
                    <Route exact path="/Game" render={() => <GameComponent />} />
                    <Redirect to="/Welcome" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default RouteComponent;
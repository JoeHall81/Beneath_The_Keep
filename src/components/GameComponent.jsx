import React, { Component } from 'react';
import '../custom_css/Game.css';

class GameComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="characterActions col-4">
                            <h1>Hi</h1>
                        </div>
                        <div className="story col-4">
                            <h1>Hi</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GameComponent;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayerComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-sm-3">
                        Player 1
                        
                        <Link to="/Game">
                            <button>Choose Adventurer</button>
                        </Link>
                    </div>
                    <div className="col-sm-3">
                        Player 2
                        
                        <Link to="/Game">
                            <button>Choose Adventurer</button>
                        </Link>
                    </div>
                    <div className="col-sm-3">
                        Player 3
                        
                        <Link to="/Game">
                            <button>Choose Adventurer</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerComponent;
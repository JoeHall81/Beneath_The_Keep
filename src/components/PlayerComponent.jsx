import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAdventurerOptions({adventurer, onClick}) {
    return (
        <Card outline color="secondary">
            <CardBody>
                <CardTitle tag="h4">{adventurer.name}</CardTitle>
                <CardSubtitle tag="h6">{adventurer.race}{":  "}{adventurer.class}</CardSubtitle>
            </CardBody>
            <CardBody>
                <CardText>{adventurer.bio}</CardText>
                <Link to="/Game">
                    <button onClick={() => onClick(adventurer.id)}>Choose Adventurer</button>
                </Link>
            </CardBody>
        </Card>
    );
}

function PlayerComponent(props) {
    
    const adventurerChoices = props.adventurers.map(playerOption => {
        return (
            <CardDeck key={playerOption.id} className="col-sm-4">
                <RenderAdventurerOptions adventurer={playerOption} onClick={props.onClick} />
            </CardDeck>
        )
    });

        return (
            <div className="container">
                <div className="row justify-content-around">
                    {adventurerChoices}
                </div>
            </div>
        );
}

export default PlayerComponent;
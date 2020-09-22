import React from 'react';
import { Button, Card } from 'react-bootstrap';



const Details = (props) => {
    const{image,name} =props.room ;


    return (
        <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book</Button>
            </Card.Body>
            </Card>
             
        </div>
        
    );
};

export default Details;



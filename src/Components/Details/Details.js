import React from 'react';
import { Card } from '@material-ui/core';
import { Button } from 'react-bootstrap';

const Details = (props) => {
    const{image,name} =props.room ;


    return (
        <div>

<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    {name}
                    </Card.Text>
                    <Button variant="primary">Book</Button>
                </Card.Body>
            </Card>    
             
        </div>
        
    );
};

export default Details;



import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Place.css';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      
    },
    media: {
        height: 100,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));
 const Place =(props)  =>{
     const{imgUrl, title,description,placeName} = props.place;
    const classes = useStyles();
    const history = useHistory();
    const handleBook = (placeName) => {
        history.push(`/book/${placeName}`);
    }
    return (
        <Card className={classes.root}>
        <CardHeader
          title={title}
        />
         <img className="image" src={imgUrl} alt=""/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        
          <Button onClick={() => handleBook(placeName)} variant="contained" color="primary">
              Book
          </Button>
        </CardActions>
      </Card>    

    );
};
export default Place;
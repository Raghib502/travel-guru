import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Details from '../Details/Details';
import RoomDetails from '../../fakeData/RoomDetails';


const Book = () => {
    const {placeName} = useParams();

    return (
         <div>
             <h1>Stay in {placeName}</h1>
             {
                RoomDetails.map(room => <Details room={room}></Details>)
            }
            <p>OR Want to go <Link to="/home">different place?</Link> </p>
        </div>
    );
};

export default Book;
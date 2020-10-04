import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import img from '../../Images/image/riverClean.png'
import './Events.css'
import orgdata from '../../FakeData/orgData'
import EventCards from './EventCards';

const Events = (props) => {

      //get Events data 
      const [event ,setEvent] = useState([]);
      useEffect(() => {
        fetch('http://localhost:5000/eventList') 
            .then(response => response.json())
            .then(data => setEvent(data)); 
      }, []);
   
    return (
     <div className = 'event-body'>   
        <Container>
            <Row>
                {
                    event.map( event => <EventCards  key= {event._id}  event={event}></EventCards>)
                }
            </Row>  
        </Container>
     </div>
    );
};

export default Events;
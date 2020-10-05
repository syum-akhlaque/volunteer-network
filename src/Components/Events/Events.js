import { Container } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Events.css'
import EventCards from './EventCards';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Events = (props) => {
  const [events ,setEvents] = useState([]);
  const [loggedInUser] = useContext(userContext);
  const requestOptions = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  }
  const handleRemoveEvent = (id)=>{
        fetch('https://cryptic-ocean-31876.herokuapp.com/delete/'+id,{ //fetch request for delete 
            method: 'DELETE'
          })
        .then(() => {       
            fetch('https://cryptic-ocean-31876.herokuapp.com/eventList?email='+loggedInUser.email,requestOptions) // fetch req for refresh events
            .then(response => response.json())
            .then(data => setEvents(data)); 
         }).catch(err => {
           console.error(err)
         });
    }

      //get Events data 
    useEffect(() => {
           fetch('https://cryptic-ocean-31876.herokuapp.com/eventList?email='+loggedInUser.email,requestOptions) 
              .then(response => response.json())
              .then(data => setEvents(data)); 
        }, [loggedInUser.email,requestOptions]);
   
    return (
     <div className = 'event-body'>   
        <Container>
            <Row>
                {loggedInUser.isLogIn? 
                <>
                  {
                    events.map( events => <EventCards  key= {events._id}  events={events} handleRemoveEvent= {handleRemoveEvent}
                    ></EventCards>)
                  }
                </>:
                <>
                  <div className = 'd-flex justify-content-center  w-100 '>
                    <Link to='/login'>
                      <button className= ' btn btn-secondary text-white mt-5 align-items-center'>Please Login To See Your Events </button>
                    </Link>
                  </div>
                </>
              }
            </Row>  
        </Container>
     </div>
    );
};

export default Events;
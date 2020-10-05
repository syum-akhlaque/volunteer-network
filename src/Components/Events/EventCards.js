import React from 'react';
import './Events.css'


const EventCards = (props) => {
    const {imgUrl, date, orgName, _id} = props.events;
    //let dltId = 'str'+_id;
    
    return (
        <>
        <div className = 'd-flex col-md-6 events '>
            <div>
                <img src={imgUrl} alt=""/>
            </div>
            <div className ='event-details '>
                <h4>{orgName}</h4> 
                <b>{date}</b>
                <div className ='event-button d-flex align-items-end justify-content-end '>
                <button className= 'btn btn-secondary ' onClick={(event)=>props.handleRemoveEvent( _id)} >Cencle</button> 
                </div>
            </div> 
        </div>
    </>
    );
};

export default EventCards;

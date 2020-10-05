import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import './Admin.css'
import SingleTR from './SingleTR';
import AddEvent from './AddEvent';

const Admin = () => {
       const [events ,setEvents] = useState([]);
       const handleRemoveUser = (id)=>{ // remove a user after click on cencle button
            fetch('https://cryptic-ocean-31876.herokuapp.com/delete/'+id,{ //fetch request for delete 
                method: 'DELETE'
            })
            .then(() => {       
                fetch('https://cryptic-ocean-31876.herokuapp.com/allEventList') // fetch req to refresh admin page
                .then(response => response.json())
                .then(data => setEvents(data)); 
            }).catch(err => {
            console.error(err)
            });
        }

       useEffect(() => {
        fetch('https://cryptic-ocean-31876.herokuapp.com/allEventList')  //fetch req for get events
            .then(response => response.json())
            .then(data => setEvents(data)); 
        }, []);

        const displayAdminForm = ()=>{
            document.getElementById('event-list').style.display = 'none';
            document.getElementById('admin-addEvent-form').style.display = 'block';
        }
        const displayAllEventList = () => {
            document.getElementById('admin-addEvent-form').style.display = 'none';
            document.getElementById('event-list').style.display = 'block';
           
        }
    return (

            <Row className = 'd-flex admin'>

                {/*admin left sidebar   */}
                <div className = 'col-md-2 left-sidebar '>
                     <p onClick={displayAllEventList} className ='pt-3 pl-2'> <SupervisorAccountOutlinedIcon/> Volunteer register list </p>
                     <p onClick={displayAdminForm} className ='pl-4' ><AddBoxIcon/>Add Event</p>
                </div>

                {/*-----admin right side start----- */} 
                <div className = 'col-md-10 right-side '>  

                    <table className="table table-striped " id = 'event-list'> {/* List of all events */}
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Registating date</th>
                                <th scope="col">Volunteer list</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map( events => <SingleTR key= {events._id}  events={events} handleRemoveUser= {handleRemoveUser}> </SingleTR>)
                            }   
                        </tbody>
                    </table>

                    <div id ='admin-addEvent-form'> {/* This is from to upload  organization event by admin*/}
                        <AddEvent/>  
                    </div>
                    {/*-----admin right side end----- */}

                </div>                      
            </Row>  
    );
};

export default Admin;
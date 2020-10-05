import React, { useContext, useState } from 'react';
import './AddEvent.css'
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const defaultImgUrl = 'https://i.postimg.cc/br5jT64V/house-png-170.png'

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      const onSubmit = data => { //Handle register , send register info in db;
        const events = { // this object that will be push in database for as a new org.
            orgName : data.orgName,
            description: data.description,
            date    : selectedDate.toString().slice(4,15),
            orgImg  : defaultImgUrl,
            
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events)
        };
        fetch('https://cryptic-ocean-31876.herokuapp.com/addNewOrgEvent', requestOptions) ;// fetch req for add new org event 
       
        history.push({ 
            pathname: '/', //redirect to home page
        });
    };

    return (
        <div >
            <form className='addUser-form' onSubmit={handleSubmit(onSubmit)}>
                <h3>ADD EVENT</h3> <br/>
                <div className ='d-flex'>
                    <div >
                        <label>Event Title</label>
                        {errors.orgName && <span className='error'>This field is required</span>}
                        <input name="orgName" placeholder="Event Title" ref={register({ required: true })} />

                        <label>Event Description</label>
                        {errors.description && <span className='error' >This field is required</span>}
                        <input name="description" className='big-field' placeholder="Event Description"  ref={register({ required: true })} />
                    </div>
                    <div className= 'px-5'>
                        <label>Event Date</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid >
                                <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </div>

                </div>
                
                <input type="submit" value="Add Event" />
            </form>      
        </div>
    );
};

export default AddEvent;
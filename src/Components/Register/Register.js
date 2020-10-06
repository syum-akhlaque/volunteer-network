import React, { useContext, useState } from 'react';
import './Register.css'
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const Register = () => {

    const [loggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const location = useLocation();
    const {orgName,imgUrl} = location.state || ''; // get organization name and img url from state
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const onSubmit = data => { //Handle register , send register info in db;
        const events = { //object that will be push in database
            name    : loggedInUser.name,
            orgName : orgName,
            email   : loggedInUser.email,
            date    : selectedDate.toString().slice(4,15),
            imgUrl  : imgUrl,        
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events)
        };
        fetch('https://cryptic-ocean-31876.herokuapp.com/addEvents', requestOptions); // fetch req to add events
        
        history.push({ 
            pathname: '/events',
            state: { 
                date : selectedDate,
                orgName : data.orgName,
            }
        });
    };
   
    return (
        <div className = 'register-form'>
        <h4> Register as a Volunteer</h4>

        <form onSubmit={handleSubmit(onSubmit)} >
                   
            <input name="name" type="text" defaultValue={loggedInUser.name} placeholder= 'Full Name' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
            {errors.name && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
           
            <input name="email" type="email" defaultValue={loggedInUser.email} placeholder = "Email" ref={register({ required: true })} />
               
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}    
                />
                </Grid>
            </MuiPickersUtilsProvider>

            <input name="description" type="text" placeholder= 'Description'  ref={register({ required: true })}/>
            {errors.description && <span className='error'>Description is required </span>}

             <input name="orgName" type="text" defaultValue={orgName} placeholder= 'OrgName'  ref={register({ required: true })} />
             {errors.orgName && <span className='error'>Org Name is required </span>}


            <input type="submit" value =  'Register' />
        </form>    
    </div>
    );
};

export default Register;
import React, { useState } from 'react';
import './Register.css'
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const Register = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const loggedInUser = '';
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    console.log(selectedDate);
    return (
        <div className = 'login-form'>
        <h4> Register as a Volunteer</h4>

        <form onSubmit={handleSubmit(onSubmit)} >
                   
            <input name="fullName" type="text" defaultValue={loggedInUser.displayName} placeholder= 'Full Name' ref={register({ required: true, minLength: 3 , pattern : /^([^0-9]*)$/ })} />
            {errors.fullName && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}
           

            <input name="email" type="email" defaultValue={loggedInUser.email} placeholder = "Email" ref={register({ required: true })} />
             {errors.description && <span className='error'>Email is required </span>}  

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

            <input name="description" type="text" placeholder= 'Description'/>
            {errors.description && <span className='error'>*Required, minimum charecters 3 and digit not allowed</span>}    

             <input name="fullName" type="text" defaultValue={loggedInUser.orgName} placeholder= 'OrgName' />
            
             
          
            <input type="submit" value =  'Register' />

        </form> 
      
    </div>
    );
};

export default Register;
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './Admin.css'


const SingleTR = (props) => {
    const {date, email, name, orgName, _id} = props.events;

    return (
        <>
             <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td>{orgName}</td>
                <td className='dlt-icon' onClick={()=>props.handleRemoveUser( _id)}><DeleteIcon color="secondary"/></td>
            </tr>
        </>
    );
};

export default SingleTR;
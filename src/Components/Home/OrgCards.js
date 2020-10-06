import React from 'react';
import './Home.css'

const OrgCards = (props) => {
    const {orgImg,orgName,id} = props.org;
    const btnColorList = [
        "btn-secondary",
        "btn-warning",
        "btn-info", 
        "btn-danger",
        "btn-primary",
        "btn-success"
    ]
    const handleRandomBtnColor = ()=>{
        const colorIndex = Math.floor(Math.random()*6); //returns a random integer from 0 to 5
        return colorIndex;
    }
    const btnColor = btnColorList[handleRandomBtnColor()];
    return (
        <div style={{ backgroundImage: ` url(${orgImg})`         
            }} className ='cards col-md-3 d-flex align-items-end' > 
            <button className={btnColor + ' btn cards-btn btn-lg py-3'} onClick = {()=>props.processRegister(orgName , id, orgImg)} > {orgName}</button> 
        </div>
    );
};

export default OrgCards;

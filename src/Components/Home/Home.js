import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';
const Home = () => {

    //get ornaginazation data 
    const [org ,setOrg] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/orglist') 
          .then(response => response.json())
          .then(data => setOrg(data)); 
    }, []);
    const history = useHistory();
    
    const processRegister = (name, id, imgUrl)=> {
       
        history.push({ 
            pathname: '/register',
            state : {
                id : id,
                orgName : name,
                imgUrl  : imgUrl
            }
        });
    }

    return (
        <div className ='home'>
            <h2>I grow by helping people in need.</h2> 
            <div className = 'search-bar'>
                <input type="text" name="" id="" placeholder ='Search...'/>
                <button className= 'btn btn-primary  btn-lg' onClick = '' > Search</button>
            </div>  

            <div>
                <Container>
                    <Row>
                        {
                            org.map( org => 
                                <div  style={{  backgroundImage: ` url(${org.orgImg})`,           
                                    }} className ='cards col-md-3 d-flex align-items-end' >
                                    <button className= 'btn btn-danger cards-btn btn-lg py-3 ' onClick = {()=>processRegister(org.orgName , org.id, org.orgImg)} > {org.orgName}</button> 
                                </div>)
                        }       
                    </Row>  
                </Container>
            </div>
        </div>
    );
};

export default Home;
{/* <div  style={{  backgroundImage: ` url(${img})`,           
                        }} className ='cards col-md-3 d-flex align-items-end' >
                        <button className= 'btn btn-warning cards-btn btn-lg ' onClick = '' > Search</button> 
                    </div>  */}
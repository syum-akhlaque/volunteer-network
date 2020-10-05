import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';
const Home = () => {

    //get ornaginazation data 
    const [org ,setOrg] = useState([]);
    useEffect(() => {
      fetch('https://cryptic-ocean-31876.herokuapp.com/orglist') 
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
                <input type="text" placeholder ='Search...'/>
                <button className= 'btn btn-primary  btn-lg'> Search</button>
            </div>  

            <div>
                <Container>
                    <Row>
                        { //get all organization list
                           org.map( org => 
                            <div  key={org._id} style={{  backgroundImage: ` url(${org.orgImg})`,           
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

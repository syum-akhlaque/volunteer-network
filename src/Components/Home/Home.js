import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';
import OrgCards from './OrgCards';
const Home = () => {

    //get ornaginazation data 
    const [org ,setOrg] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(() => {
      fetch('https://cryptic-ocean-31876.herokuapp.com/orglist?search='+search) 
          .then(response => response.json())
          .then(data => setOrg(data)); 
    }, [search]);

    const handleSearch = event=>{
       setSearch(event.target.value)
    }

    const history = useHistory();
    const processRegister = (name, id, imgUrl)=> {  //--------------- after click register btn ----------------- 
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
                <input type="text" placeholder ='Search...' onBlur = {handleSearch}/>
                <button className= 'btn btn-primary  btn-lg'> Search</button>
            </div>  

            <div>
                <Container>
                    <Row>
                        { //-----Show all organization list----
                           org.map( org => <OrgCards key={org._id} org = {org} processRegister={processRegister}>
                           </OrgCards> )
                        }       
                    </Row>  
                </Container>
            </div>
        </div>
    );
};

export default Home;

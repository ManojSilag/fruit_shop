import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';


const Welcome = ()=> {
    return (
        <div className="welcome-page--back">
        <div className="welcome-page">
            <h1> &nbsp; Welcome to My Fruit Store  &nbsp;</h1>
            <Link to='/page1'>
            <button type="button" className="btn btn-info btn-pad">Enter</button>
            </Link>            
        </div>
        </div>
    )
}

export default Welcome;
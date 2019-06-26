import React from "react";
import List from './List';
import {Link} from 'react-router-dom';


class Page1 extends React.Component{

    onSearchSubmit= (term) => {
        this.props.onFormSubmit(term)
        const page2 = document.querySelector('.btnn');
        page2.className="btn btn-success";
        page2.disabled = false;
    }
    
    render(){
        return (
            <div>
            <h4 style={{display:'flex', justifyContent:'center'}}>My Fruit Store</h4>
            <hr style={{margin :'8px'}}/>
            <div style={{display:'flex', justifyContent:'center'}} > 
                <button style={{marginRight:'2px'}} type="button" className="btn btn-success">Page1</button>
                <Link to ='/page2'>
                <button style={{marginLeft :'2px'}} type="button" className="btn btn-secondary btnn" disabled>Page2</button>
                </Link>
            </div>
            <hr style={{margin :'8px'}}/>
            <List onSearchSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}


export default Page1;
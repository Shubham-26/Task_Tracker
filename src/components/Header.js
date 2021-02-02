import React from 'react';
import {  } from 'react-dom';
import  Button  from "./Button";
import  PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

const Header =({title,onAdd ,showAdd})=> {

    
    
        
const location = useLocation();
    return(
        <header className="header">
            
              <h2>{title}</h2>
            
                    
            {location.pathname ==='/' && 
            ( 
            <Button
             color={showAdd ? 'red':'green'}
             text={showAdd ? 'Close':'Add'}  
             onClick={onAdd}/>
            )}
             
           </header>
           
    )
    

}

Header.defaultProps = {

    title:'Task Tracker',
}/*
Home.PropTypes ={
    title : PropTypes.string,
}
*/
export default Header ;
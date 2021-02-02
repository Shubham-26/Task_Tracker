import React from 'react';
import { PropTypes } from "prop-types";
const Button =({color, text, onClick})=>{

   const onclick =(e)=>{
      
   }
    return(

        <button onClick={onClick}
           style={{background:color}}
           className ='btn'>
          {text}  
        </button>
    )
}
Button.defaultPropTypes ={

    color:'steelblue',
    
}
/*
Button.PropTypes={

    text:PropTypes.String,
    color:PropTypes.String,
    onClick:PropTypes.func,
}*/
export default Button;

    
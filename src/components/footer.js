import React from 'react'
import { Link ,useLocation } from "react-router-dom";

const footer = () => {

  /*  const history = useHistory();
      
        function handleClick() {
          history.push("/About");
        }
   */ return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/About'>About</Link>
            
        </footer>

    )
}
export default footer;

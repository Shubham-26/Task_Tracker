import React from 'react'
import { Link ,useLocation} from "react-router-dom";
const About = ()=>
{
  /*  const history = useHistory();
      
    function handleClick() {
      history.push("/");
    }
    */
    return(
    
        <div>
            <h4>Version 1.0.0</h4>
           <Link to='/'>Go Back</Link>
        </div>
    )
}
export default About;

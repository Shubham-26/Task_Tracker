import React from 'react';
import {FaTimes} from 'react-icons/fa';



const Tasks= ({T_task , onDelete ,onToggle})  => {

  
    return(
       <div>
           {T_task.map((t, index) => (
                <div className={`task ${t.reminder ?
                    'reminder' :'' } ` } key={index} onDoubleClick={()=>onToggle(t.id)}>
                <h3>{t.text}
            <FaTimes style=
            {{
                color:'red' ,
                cursor:'pointer'
            }}
            onClick={() => onDelete(t.id)}
            onToggle ={() =>onToggle(t.id)}
            /></h3>
            <p>{t.day}</p>
        
        </div>
      
      ))}
       </div>
    )
}
export default Tasks;
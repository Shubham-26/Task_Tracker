import { useState } from 'react';



const AddTask=({onAdd}) =>
{
    const [showAddTask,setShowAddTask]=useState(false)
    
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    var alert=null
    const onSubmit =(e) =>
    {
        e.preventDefault() 

        if(!text)
        {
            alert ='please Enter text'
            return alert
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (

        <form className="add-form" onSubmit={onSubmit} > 
            <div className="form-control">
               
                <label>Task </label>
                <input 
                type="text" 
                placeholder='Add Task'
                value={text}
                onChange={(e)=>
                setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time </label>
                <input 
                type="text"
                placeholder='Add Day & Time'
                value={day}
                onChange={(e)=>
                setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>set Reminder </label>
                <input 
                type="checkbox" 
                value={reminder}
                onChange={(e)=>
                setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' className='btn btn-block ' value='Save Task'/>

        </form>
    )
}
export default AddTask;
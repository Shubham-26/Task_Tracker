import Header from './components/Header';
import Footer from './components/footer';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/About';
import Tasks from './components/Tasks';
import Add from './components/addTask';
import {useState ,useEffect} from 'react'; 
//import {tasks} from './db.json'

const App = () => {

  const [showAddTask,setShowAddTask]=useState(false)
  const [task, setTasks] = useState([])

 
    /*
//Using Production deployment Serve ,,
//Now This data cominng form db.json file as a Database file. 
    {
        
      "id":1,
      "text":"Doctor Appointment",
      "day":"Feb 5 st 1:30 pm",
      "reminder":true
  },
  
{
    
    "id":2,
    "text":"Teacher Appointment",
    "day":"Feb 5 st 3:30 pm",
    "reminder":true
},

{
    
    "id":3,
    "text":"meeting",
    "day":"Feb 5 st 4:30 pm",
    "reminder":false
}
  

  ]);
*/
  useEffect(() => {
      const getTasks = async()=>
      {
        const tasksFromServer = await fetchTasks('http://localhost:5000/tasks') 
        setTasks(tasksFromServer)
      }
      getTasks()
    }, [])

    //Fetch tasks..
    const fetchTasks = async ()=>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      
      return data
    }
    //Fetch task..
    const fetchTask = async (id)=>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      //console.log(data)
      return data
    }
//Delete Task..
    const deleteTask = async (id)=>
    {
      await fetch(`http://localhost:5000/tasks/${id}`,{method :'DELETE'})
      setTasks(task.filter((t) =>   
        t.id !== id   
      ))   
    }

//toggle Reminder..
const toggleReminder = async (id)=>
{
  const taskToToggle = await fetchTask(id)
  const updateTask = {...taskToToggle,reminder : !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
  method:'PUT',
  headers:{
          'Content-type':'application/json',
          },
  body:JSON.stringify(updateTask),
  })
  const data = await res.json()


  setTasks(task.map((tsk) =>   
  tsk.id === id ? {...tsk,reminder: data.reminder }:tsk 
)) 
}

//Add Task..
const addTask = async (adTask)=>
{
  const res = await fetch('http://localhost:5000/tasks',
  {
    method:'POST',
    headers:{
              'Content-type':'application/json'
            },
    body:JSON.stringify(adTask)
  })
  const data = await res.json()
  setTasks([...task,data])
  /*const id= Math.floor(Math.random()* 10000)+1
  const newTask = {id ,...text}
  setTasks([Tasks,newTask])  */
}  

  return (
    <Router>
    <div className='container'>
      <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          
        <Route path='/' exact render={(props)=>
          (
          <>
            {showAddTask &&  <Add onAdd={addTask}/>}    
             { task.length > 0 ?      
            <Tasks T_task={task} onDelete={deleteTask} onToggle={toggleReminder}/>
              :
            'No Task Available' 
            }
          </>  
          )}/>
      <Route path='/About' component={About} />
    <Footer />
    </div>
    </Router>
  );


  }



 


export default App;

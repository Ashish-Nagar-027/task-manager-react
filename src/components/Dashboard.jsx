import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({user, setUser}) => {

     const navigate = useNavigate()
      
     useEffect(()=> {
      if(!user) {
        navigate("/");
       }
     },[user,navigate])

     const [inputValue, setInputValue] = useState('')
     const [tasks, setTasks] = useState([])
     
       
   const handleTaskSubmit = (e) => {
        e.preventDefault()
        if(inputValue !== '') {
             setTasks([...tasks, inputValue])
             setInputValue('')
        }
   }

   const handleInput = (e) => {
        setInputValue(e.target.value)
   }

  return (
    <div className='dashboard'>
     <h2>Welcome to Your DashBoard !</h2>
        <form className='create-task-form' onSubmit={handleTaskSubmit}>
             <input className='task-input' value={inputValue} type='text' onChange={handleInput}/>
             <button  className='create-task-btn' onClick={handleTaskSubmit}>add task</button>
        </form>
        
        <div className='task-container'>
          {    
           tasks.length === 0 ? <div><h3>no Available tasks</h3></div> :
               tasks.map((task,index) => {
                    return <div className='task' key={index}>
                         <h3><span>{index+1}</span>.{task}</h3>
                    </div>
               })
          }
        </div>
    </div>
  )
}

export default Dashboard
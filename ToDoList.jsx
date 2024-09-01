/*import  { useState } from 'react'
export default function ToDoList(){
 const [ tasks , setTasks] = useState(["do my homework","clean my room"])
 const [ newTask , setNewTask] = useState('')
  function handelarInput(event){
     setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim() !==""){
      setTasks(t=>[...t,newTask]);
      setNewTask('');
    }
 }
  function deleteTask(index){
     const updateTask =tasks.filter((_,i)=> i !==index);
       setTasks(updateTask);
  }
  function moveUpTask(index){
   
    if(index > 0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index -1]] =
      [updatedTasks[index -1 ],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveDownTask(index){
    if(index < tasks.length - 1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index +1]] =
      [updatedTasks[index +1 ],updatedTasks[index]];
      setTasks(updatedTasks);
    
  }}
  return(
    <div>
   <h1>TO DO LIST</h1>
   <div>
      <input type='text' value={newTask} onChange={handelarInput} placeholder='add a task'/>
     
      <button onClick={addTask}>Add Task</button>
      </div>
      <ol> 
        {tasks.map((task,index)=>
        <li key={index}>
         <span>{task}</span>  
          <button onClick={()=>deleteTask(index)}>Delete</button>
          <button onClick={()=>moveUpTask(index)}>Move Up</button>
          <button onClick={()=>moveDownTask(index)}>Move Down</button>
        </li>
      )}
      </ol>
     
    </div>
  )
}*/
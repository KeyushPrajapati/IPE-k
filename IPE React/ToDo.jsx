import React ,{useState}from 'react'

const ToDo = () => {
    const [arr,setArr] = useState([])
    const [todo,setTodo]= useState('')

    const handleSubmit = ()=>
    {   
        
        setArr([...arr,todo])
        setTodo('')
    }

    const handleDelete = (index)=>
    {
        const updateArr = [...arr]
        updateArr.splice(index,1)
        setArr(updateArr) 
       
        //splice (x,y,z)
        // x - defines the position where new elements should be added
        // y - defines how many elements should be removed.
        // z - define the new elements to be added.
         
    }
  return (
    <>
        <div>

            <input type="text" onChange={(e)=>setTodo(e.target.value)} id="" placeholder='TASKS...'/>
            <button onClick={handleSubmit}>Add</button>
            <hr/>

        </div>
           
     
        <ul>
        {
            arr.map((todo,index)=>(
                <li key={index}>
                    {todo} <button onClick={()=>handleDelete(index)}>Delete</button>
                </li>
            ))
        }
        </ul>
       
        
    </>
  )
}

export default ToDo
// import React, { useState } from 'react';

// function ToDo() {
//   const [tasks, setTasks] = useState([]);
//   const [taskText, setTaskText] = useState('');

//   const addTask = () => {
//     if (taskText.trim() !== '') {
//       setTasks([...tasks, taskText]);
//       setTaskText('');
//     }
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="Todo">
//       <h1>Todo List</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Add a task"
//           value={taskText}
//           onChange={(e) => setTaskText(e.target.value)}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDo;

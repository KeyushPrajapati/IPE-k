import React ,{useState}from 'react'
import axios from 'axios'

const F25 = () => {
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
           
        <h1>Pending</h1>
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

export default F25;

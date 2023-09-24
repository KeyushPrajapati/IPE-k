import React,{useState} from 'react'
// import './stock.css'
const F26 = () => {
    const [all,setAll] = useState([])
    const [table,setTable] = useState([])
    const [expens,setexpens] = useState({
        name:'',
        amount:0,
        date:'',
        category:'',
    })
    const handleValue = (e)=>{
        try{
            if(e.target.category === '' || e.target.name ==='' || e.target.date === '' )
            {
                console.log('please Enter value')
            }
            setexpens({...expens,[e.target.name]:e.target.value,}) 
            
        }catch(err)
        {
            console.log(err)
        }
    }
    const handleSubmit = () =>
    {   setAll([...table,expens])
        setTable([...table,expens])
        console.log('expens added')
        setexpens({
            name:'',
            amount:0,
            date:'',
            category:'',
          });
    }
    const handleOut = () =>
    {   const updatedTable = []
        for(let i=0;i<all.length;i++)
        {
            if(all[i].category === 'OUT-DOOR-EXPENSES')
            {   
                let obj = all[i]
                updatedTable.push(obj)
            }
        }
        setTable(updatedTable)
    }
    const handleIn = () =>
    {   const updatedTable = []
        for(let i=0;i<all.length;i++)
        {
            if(all[i].category === 'IN-DOOR-EXPENSES')
            {   
                let obj = all[i]
                updatedTable.push(obj)
            }
        }
        setTable(updatedTable)
    }
   const handleAll = ()=>{
        setTable(all)
   }
  return (
    <>
        <div>
        <input type="text" onChange={handleValue} name="name" placeholder="Name" value={expens.name} />
        <input type="number" onChange={handleValue} name="amount" placeholder="Amount" value={expens.amount} />
        <input type="date" onChange={handleValue} name="date" value={expens.date} />
        <select name='category' onChange={handleValue}>
            <option value="Null">select</option>
            <option value="OUT-DOOR-EXPENSES">OUT-DOOR EXPENSES</option>
            <option value="IN-DOOR-EXPENSES">IN-DOOR EXPENSES</option>
        </select>
        <button onClick={handleSubmit}>Add</button>
        </div>
        <div>

            <hr/>
            <button onClick={handleOut}>Outdoor Expenses</button>
            <button onClick={handleIn}>Indoor Expenses</button>
            <button onClick={handleAll}>All</button>
            {/* <button onClick={handleIn}>Yesterday</button> */}
            <hr/>
  <table rules='all' border='1' width="30%">
    <thead>
      <tr>
        <th>index</th>
        <th>name</th>
        <th>amount</th>
        <th>date</th>
        <th>category</th>
      </tr>
    </thead>
    <tbody>
      {table.map((value, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{value.name}</td>
          <td>{value.amount}</td>
          <td>{value.date}</td>
          <td>{value.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </>
  )
}

export default F26
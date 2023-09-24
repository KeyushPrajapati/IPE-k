import React,{useState} from 'react'
import './stock.css'
const Stock = () => {
    const [table,setTable] = useState([])
    const [stock,setStock] = useState({
        name:'',
        purchase_P:0,
        purchase_Q:0,
        selling_P:0,
        selling_Q:0,
        pl:0
    })
    const handleValue = (e) =>
    {   
        const updatedStock = {...stock,[e.target.name]:e.target.value,}
        if (parseInt(updatedStock.selling_Q) > parseInt(updatedStock.purchase_Q))
        {
            alert('You do not sell more than stock')
            setStock({
                name: '',
                purchase_P: 0,
                purchase_Q: 0,
                selling_P: 0,
                selling_Q: 0,
                pl: 0,
              });
        }
        else 
        {
            var pl_value = (parseInt(updatedStock.selling_P)*parseInt(updatedStock.selling_Q))
                            -(parseInt(updatedStock.purchase_P)*parseInt(updatedStock.selling_Q))
            setStock({
                     ...updatedStock,
                    pl: pl_value,
                });
            
        }

    }
    const handleSubmit = () =>
    {   
        setTable([...table,stock])
        setStock({
            name: '',
            purchase_P: 0,
            purchase_Q: 0,
            selling_P: 0,
            selling_Q: 0,
            pl: 0,
          });
    }
  return (
    <>
        <div>
        <input type="text" onChange={handleValue} name="uname" placeholder="Name" value={stock.uname} />
        <input type="number" onChange={handleValue} name="purchase_P" placeholder="Purchase Price" value={stock.purchase_P} />
        <input type="number" onChange={handleValue} name="purchase_Q" placeholder="Purchase Quantity" value={stock.purchase_Q} />
        <input type="number" onChange={handleValue} name="selling_P" placeholder="Selling Price" value={stock.selling_P} />
        <input type="number" onChange={handleValue} name="selling_Q" placeholder="Selling Quantity" value={stock.selling_Q} />
        <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
  <table>
    <thead>
      <tr>
        <th>index</th>
        <th>name</th>
        <th>purchase_P</th>
        <th>purchase_Q</th>
        <th>selling_P</th>
        <th>selling_P</th>
        <th>pl</th>
      </tr>
    </thead>
    <tbody>
      {table.map((value, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{value.uname}</td>
          <td>{value.purchase_P}</td>
          <td>{value.purchase_Q}</td>
          <td>{value.selling_P}</td>
          <td>{value.selling_Q}</td>
          <td className={value.pl > 0 ? 'green-text' : 'red-text'}>{value.pl}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </>
  )
}

export default Stock
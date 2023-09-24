import React ,{useState}from 'react'

const F24 = () => {

  const [colorT,setColor] = useState('red')
  const [text,setText] = useState('Good Morning')
  const [show,setShow] = useState('block')
  const [btnTxt,setBtnTxt] = useState('Hide')

  const handleColor = ()=>
  {
     if(colorT === 'red')
     {
      setColor('green')
     }
     else{setColor('red')}
  }

  const handleBtn = () =>{
      if(show === 'block')
      {
        setBtnTxt('Show')
        setShow('none')
      }else{
        setBtnTxt('Hide')
        setShow('block')
      }
  }
  const handleText = () =>{
    if(text === 'Good Morning')
    {
      setText('Welcome')
    }else{
      setText('Good Morning')
    }
  }

  return (
    <>
    <button onClick={handleColor}>Color</button>
    <button onClick={handleText}>Text</button>
    <button onClick={handleBtn}>{btnTxt}</button>

      <h1 style={{color:colorT,display:show}}>{text}</h1>
      <h2 style={{color:colorT}}>Hello</h2>
    </>
  )
}

export default F24; 
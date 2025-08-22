// Q: Create a component to take user input and display a greeting after clicking a button.

import React,{useState} from 'react'

const Greeting = () => {
    const [name,setName]=useState('');
    const [greet,setGreet]=useState('');

  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={()=>setGreet(`Hello, ${name}`)}>Greet</button>
      <p>{greet}</p>
      
    </div>
  )
}

export default Greeting

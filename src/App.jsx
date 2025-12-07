import React,{useState} from 'react'
import ListComponents from './container/components/ListComponents'
import UserProfile from './container/components/UserProfile'
import Greeting from './Greeting';
import Employee from './container/components/Employee';

import './App.css'

const App = () => {
  const[valueA,setValueA]=useState(5);
  const[valueB,setValueB]=useState(10);
  return (
    <div>
      {/* <button onClick={()=>setValueA(valueA+5)}>Increment</button>
      <button onClick={()=>setValueB(valueB+1)}>Decrement</button>
      <ListComponents a={valueA} b={valueB}/> */}
    
    {/* <UserProfile/> */}
    {/* <Greeting/> */}
    <Employee/>
    </div>


  )
}

export default App

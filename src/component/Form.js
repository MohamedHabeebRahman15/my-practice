import React from 'react'
import './form.css';
import { useState,createContext } from 'react';
import Formoutput from './Formoutput';


export const user=createContext();
const Form = () => {
  const[name,setName]=useState("");
  const[age,setAge]=useState('')
  const[date,setDob]=useState('');
  const[output,setoutput]=useState(false);


  const handleName=(event)=>{
          
          setName(event.target.value)
  }
  const handleAge=(event)=>{
    setAge(event.target.value)
  }
  const handleDob=(event)=>{
        setDob(event.target.value)
  }


  const handleClick=(event)=>{
    event.preventDefault();
    setName(name)
    setAge(age)
    setDob(date);
    setoutput(true);

  }
  return (
   <user.Provider value={{name,age,date,output}}>
    <div className='container'>
      <div className='form'>
      <div className='head'>
             Form Handling 
          </div>

        <form> 
        <div className='form-group'>
        <label>Enter Your Name </label>
        <input type="text" onChange={handleName} placeholder='enter your name' />
        </div>
        <div className='form-group'>
        <label>Enter Your Age </label>
        <input type="number" onChange={handleAge} placeholder='enter your age' />
        </div>
        <div className='form-group'>
        <label>Enter Your Date of Birth </label>
        <input type="date" onChange={handleDob} placeholder='enter your d.o.b' />
         </div>
         <button onClick={handleClick}>Submit</button>
         </form>
      
      </div>
     <Formoutput />
    </div>
    </user.Provider>
  )
}
export default Form
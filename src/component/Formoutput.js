import React from 'react'
import { useContext } from 'react';
import {user} from './Form.js'



const Formoutput = () => {
    const {name,age,date,output}=useContext(user)
  return (
    <div className={output? "output-Active":"output-notActive"} >
    {name && <div>Mr/Mrs <span>{name}</span></div>} 
    {age && <div> Your Age is <span>{age} </span></div>}
    {date && <div>and Your Date Of Birth is <span>{date}</span></div>}

  </div>
  )
}

export default Formoutput
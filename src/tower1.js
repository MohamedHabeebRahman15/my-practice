import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {ironmanAction,captionAction} from './App';
import './app.css'

const Tower1 = () => {
    const heros=useSelector(state=>state);
    const dispatch=useDispatch();
  return (
    <div>
         <div>
        <img src={heros}/><br/>
        <button onClick={()=>dispatch(ironmanAction())}>iron man</button><br/>
        <button onClick={()=>dispatch(captionAction())}>captain</button>
        
        </div>
    </div>
  )
}

export default Tower1
import React from 'react'
import { useState } from 'react'
import Tweet from './Tweet'
import './tweets.css';

const Tweets = () => {
    const datas=[
        {name:"habeeb",age:23},
        {name:"asfer",age:24},
        {name:"imran",age:25},
        {name:"tharik",age:26},
]

const [counter,setCounter]=useState(0);
const[toggle,setToggle]=useState(false);

const countincrease=()=>{
 setCounter(counter+1);
 
}

const toggler=()=>{
    setToggle((prev)=>!prev);
}

  return (
    <section>
        {datas.map((val, index)=>(
            <Tweet key={index}  name={val.name} age={val.age} />
            // <Tweet key={val.name}  name={val.name} age={val.age} />

         ) )}

         <h3 className={toggle ?"active":""}>count is {counter}</h3>

<button onClick={countincrease}>count</button><br></br>
<button onClick={toggler}>click</button>
    </section>
  )
}

export default Tweets
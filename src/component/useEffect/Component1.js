import React from 'react';
import { useEffect,useState} from 'react';


const Component1=()=>{
    let timer
    const[count,setCount]=useState(0);


    useEffect(()=>{
        timer = setTimeout(() => {
            setCount(count+1);
          }, 1000);
        
        return () => clearTimeout(timer);
    })

    
 
    const stop=()=>{
        clearTimeout(timer);
        setCount(0);
    }
    return(
        <div>
         <h2>countdown Time {count}</h2>
         <button onClick={stop}>stop</button>
        </div>
    )
}
export default Component1
import React,{useState} from "react";
 const App=()=> {
  const [text, setText] = useState("");
 
  const handlechange=(e)=>{
      setText(e.target.value);
      const strArr = text.split(" ");
      const obj = {
        "realy": "really",
        "wierd":"weird"
      };
      const objArr = Object.getOwnPropertyNames(obj);
      strArr.map((d, i) => {
        const n = objArr.indexOf(d);
        if (n !== -1) {
          strArr[i] = obj[objArr[n]];
          setText(strArr.join(" ")+" ");
        }
        return true;
      });
  }
 
  return (
    <div className="App">  
     <h3>EnterThe Text:</h3><input
        value={text}
        onChange={handlechange} placeholder={"enter text"}
      />
      
   
    </div>
  );
}
export default App;
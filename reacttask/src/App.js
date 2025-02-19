import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [count,setCount]=useState(0)
  const [show,setshow] =useState("")
  const [type, setType] = useState('password');
  const[eye,setEye]=useState(false)
  console.log(count);
  
  return (
    <div>
      <form>
        <input type='text'placeholder='enter' onChange={(e)=>setCount(e.target.value.length)}></input><br/>
      <span>no of chars are : {count}</span><br/>

         </form>
     <form>
     <input type={type}  value={show} placeholder='password' onChange={(e)=>setshow(e.target.value)} ></input>
     <span  style={{ cursor: "pointer", marginLeft: "5px" }} onClick={()=>{setEye(!eye);
      setType(type === "password" ? "text":"password")
     }}>
    {eye ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
     </span>
     </form>

    </div>
  )
}

export default App

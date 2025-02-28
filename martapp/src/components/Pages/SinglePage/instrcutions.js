import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Instrcutions() {
    const Inst=useOutletContext()
    console.log(Inst);
    
  
  return (
    <div>
    {Inst.instructions.map(x=>{
      return(
        < >
        {x}
        </>
        
        
      )
    })}
      
    </div>
  )
}

export default Instrcutions

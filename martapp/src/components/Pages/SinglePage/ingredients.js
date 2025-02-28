import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Ingredients() {
    const Inst=useOutletContext()
    console.log(Inst);
    
  
  return (
    <div>
    {Inst.ingredients.map(x=>{
      return(
        <>
        {x}
        </>
        
      )
    })}
      
    </div>
  )
}

export default Ingredients
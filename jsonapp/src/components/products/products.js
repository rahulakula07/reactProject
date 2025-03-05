import React from 'react'
import axios from 'axios'

const Products = ({data}) => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
     {
     data.map((x)=>{
       const handleCart=(item)=>{
        axios.post("http://localhost:3030/Cart",item)
        alert("item added sucessfll")
       }
      return(
        <div style={{width:"350px",padding:"10px",border:"2px",borderRadius:"5px"}}>
          <img src={x.image} style={{width:"300px"}}/>
          <h4>Name:{x.name}</h4>
          <button onClick={()=>handleCart(x)}>AddToCart</button>
          {/* <button>bU</button */}
        </div>
      )
     })
     }
    </div>
  )
}

export default Products
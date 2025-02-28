import React, { useEffect, useState } from 'react'
// import api from "axios"
import "./products.css"
import { useNavigate } from 'react-router-dom'

const Products = ({data}) => {
  console.log(data,"data from app.js");
  
  const navigate=useNavigate()
 

  return (
    <div className='cardContainer' style={{ display: "grid", gap: "20px", padding: "0 20px" }}>

      {/* <h2>Recipies</h2> */}

      {
        data.map((x) => {
          return (
            <div style={{ width: "100%", padding: "10px" }} onClick={()=>navigate(`/products/${x.id}`)}>
              <img src={x.image} style={{ width: "100%" }} />
              <h4>{x.name}</h4>
              <p>Rating:{x.rating}</p>
              <div className='btn' style={{display:"flex",gap:"20px"}}>
                <button className='btn1'>ingredients</button>
                <button>instrcutions</button>
              </div>
            </div>

          )
        })
      }

    </div>
  )
}

export default Products


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Products = ({ data }) => {
//   const navigate = useNavigate();

//   // 🔴 Added loading message
//   if (!data || data.length === 0) {
//     return <h2>Loading recipes...</h2>;
//   }

//   return (
//     <div className='cardContainer' style={{ display: "grid", gap: "20px", padding: "0 20px" }}>
//       {data.map((x) => (
//         <div key={x.id} style={{ width: "100%", padding: "10px" }} onClick={() => navigate(`/products/${x.id}`)}>
//           <img src={x.image} style={{ width: "100%" }} alt={x.name} />
//           <h4>{x.name}</h4>
//           <p>Rating: {x.rating}</p>
//           <div className='btn'>
//             <button className='btn1'>Ingredients</button>
//             <button>Instructions</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;


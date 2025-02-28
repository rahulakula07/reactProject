import React from 'react'
import { useParams,Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import Products from './products'

const Singleproduct = ({ data }) => {
  // console.log(useParams());
  const { id } = useParams()
  console.log(id)
  const singleitem = data.find((x) => x.id === Number(id))

  return (
    <div style={{display:"flex",border:'2px solid black',height:"auto"}}>
      <div style={{display:"flex",flexDirection:"column", width: "350px",marginLeft:"100px",padding:"10px"}}>
      <img src={singleitem.image} alt={singleitem.name} style={{ width: "100%" }} />
      <h2>{singleitem.name}</h2>
      <p>Rating: {singleitem.rating}</p>
      </div>
      {/* <p>{singleitem.description}</p> */}
      <div className='btn' style={{ display: "flex", gap: "20px" }}>
        <Link to={`/products/${singleitem.id}/instructions`}>instrcutions</Link>
        <Link to={`/Products/${singleitem.id}/ingredients`}>ingredients</Link>
        {/* <Link to={`/Products/${singleitem.id}/instrcutions`}>instrcutions</Link> */}
      </div>
    <Outlet context={singleitem}></Outlet>
    
    </div>
  )
}

export default Singleproduct



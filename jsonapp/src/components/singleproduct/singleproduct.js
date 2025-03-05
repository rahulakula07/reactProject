import React, { useEffect, useState } from "react"
import "./singleproduct.css"
import axios from "axios"
function Singleproduct(){
    const [singledata,setSingleData]=useState([])
    const [deletecartItem,setDeleteCartItem] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:3030/Cart").then(res=>setSingleData(res.data)).catch(err=>console.log(err))
    },[deletecartItem])
    console.log(singledata);
    const handleDeleteCartItem=(x)=>{
        axios.delete(`http://localhost:3030/Cart/${x.id}`)
            // setDeleteCartItem(!deletecartItem)
            setDeleteCartItem(x)
        alert("item deleted") 
        
    }
    return(
        <div>
            <h1>Cart</h1>
        <div>
        <table border={1} cellPadding={10} cellSpacing={10}>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Ingredients</th>
                <th>Image</th>
                <th>delete</th>
            </tr>
        {
            singledata.map((x,index)=>{
                return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{x.name}</td>
                    <td>{x.ingredients}</td>
                    <td><img src={x.image} alt="" width="100px"/></td>
                    <td><button onClick={()=>handleDeleteCartItem(x)}>delete</button></td>
                </tr>
                )
                
            })
        }
        </table>
        </div>
        </div>
    )
}
export default Singleproduct
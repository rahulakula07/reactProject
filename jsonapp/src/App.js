import React, { useEffect,useState } from 'react'
import Navbar1 from './components/navbar/navbar'
import a from "axios" 
import Products from './components/products/products'
import Home from './components/home/Home'
import { Route,Routes } from 'react-router-dom'
import Singleproduct from './components/singleproduct/singleproduct'
import SignUp from './components/auth/Signup/Signup'
import Login from './components/auth/Login/Login'

const App = () => {
  const [data,setData]=useState([])

useEffect(()=>{
  a.get("http://localhost:3030/recipes").then((res)=>setData(res.data)).catch((err)=>console.log(err))
},[])
console.log(data);

  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/products" element={<Products data={data}/>}/>  
        <Route path='/Singleproduct' element={<Singleproduct />} />
        {/* <Route path='/SignUp' element={<SignUp/>}></Route> */}
      
      </Routes>
      
    </div>
  ) 
}

export default App

// import ReactDOM from "react-dom/client";
import React,{useState,useEffect} from 'react'
import api from "axios"
import {  Routes, Route, data } from "react-router-dom";
import Products from './components/Pages/Products/Products.js';
import Contact from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Navbar1 from "./components/Navbar/layout";
import Singleproduct from './components/Pages/SinglePage/singleproduct.js'
import Instrcutions from './components/Pages/SinglePage/instrcutions.js';
import Ingredients from './components/Pages/SinglePage/ingredients.js';
import SignUp from './components/forms/signup.js';


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    api.get("https://dummyjson.com/recipes").then((res) => setData(res.data.recipes)).catch((err) => { console.log(err) })
  }, [])
  console.log(data);
  return (
    <div>
      <Navbar1/>
      <SignUp />
      
    
      {/* <Singleproduct/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/about" element={<Contact/>}/>
        <Route path="/products" element={<Products data={data}/>}/>  
        <Route path="/products/:id" element={<Singleproduct data={data}/>}> 
                <Route path='Instructions' element={<Instrcutions/>} />
                <Route path='ingredients' element={<Ingredients/>}></Route>
                </Route>
      </Routes>
      
      
    </div>
  )
}

export default App





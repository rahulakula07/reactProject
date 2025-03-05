import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container,Button,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoCartSharp } from "react-icons/io5";
import axios from 'axios';

const Navbar1 = () => {

  const [singledata,setSingleData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3030/Cart").then(res=>setSingleData(res.data)).catch(err=>console.log(err))
  },[])

  console.log(singledata);
  
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav  style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <Link to="/home">Home</Link>
            <Link to="/products">recipie</Link>
            <Link to="/singleproduct" style={{fontSize:20}}><IoCartSharp /><Badge>{singledata.length}</Badge></Link>
            <Button>signUp</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1

import React from 'react'
// import Container from 'react-bootstrap/Container';
import {Nav,Navbar,Button,Container} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import { MdOutlineShoppingCart } from "react-icons/md";
// import "./App.css"

function Navbar1() {
  return (
    <>
    <Navbar bg='' expand="md" className="maincontainer"  >
      <Container >
        <Navbar.Brand href="#home"><h2>FoodApp</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end',gap:"20px"}}>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/products">products</Nav.Link>
          <Button className='colo'>Login</Button>  
          <Button className='colo'>signup</Button>
          <MdOutlineShoppingCart style={{fontSize:"22px"}}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    
  )
}

export default Navbar1

import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./navbar.css"

function Navbar1() {
    // console.log(typeof Navbar);
    
  return (
    <>
      <Navbar bg='primary' style={{backgroundColor:"bule"}} expand="md" className="navbar1">
      <Navbar.Brand>Candy UI</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className='col'>
        <Nav>
            <Nav.Link>home </Nav.Link>
            <Nav.Link>Services </Nav.Link>
            <Nav.Link>contact </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>
    </>
  )
}

export default Navbar1

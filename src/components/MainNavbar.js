import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function MainNavbar (){
    
    return(
        <div>
      <Navbar bg="light" variant="pills">
        <Navbar.Brand as={Link} to="/">
          Would you Rather?
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/questions">
              Questions
          </Nav.Link>
          <Nav.Link as={Link} to="/leaderboard">
            Leaderboard
          </Nav.Link>
          <Nav.Link as={Link} to="/add">
            Add Question
          </Nav.Link>
        </Nav>
        <Nav.Link className="justify-content-end" as={Link} to="/login">
            Login
        </Nav.Link>
      </Navbar>
    </div>
    )
}


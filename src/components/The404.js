import React from "react";
import { NavLink } from "react-router-dom";
import Error from '../Error.png'
import {Button} from 'react-bootstrap';


export default function NotFound() {
  return (
    <div className="center">
      <img src={Error} alt="404" 
      width= '1000'/>
      <NavLink to="/login">
        <Button variant="primary">
          Back to Home?
        </Button>
      </NavLink>
    </div>
  );
}

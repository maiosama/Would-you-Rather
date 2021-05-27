import React from "react";
import { NavLink } from "react-router-dom";
import Error from '../Error.png'
import {Button} from 'react-bootstrap';


export default function NotFound() {
  return (
    <div className="center">
      <img src={Error} alt="404" 
      width= '800'
      height='500'/>
      <div>
      <NavLink to="/login">
        <Button variant="primary">
          Back to Home?
        </Button>
      </NavLink>
      </div>
    </div>
  );
}

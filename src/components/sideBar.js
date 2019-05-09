import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'; 
import { FaRunning } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import{ FaListAlt } from 'react-icons/fa'



class SideBar extends Component {
  render() {
    const style = {
      height: '100vh'
    }

   return (
        <Nav 
          className="flex-column"
          style={style}>
          <Nav.Link>
            <FaClipboard /> Logs
          </Nav.Link>
          <Nav.Link>
            <FaRunning /> Runs
          </Nav.Link>
          <Nav.Link>
            <FaListAlt /> Subsystem overview
          </Nav.Link>
        </Nav>
   )
  }
}

export default SideBar;
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Nav'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaUserAlt, FaRegBell } from 'react-icons/fa'
import ModalButton from './modelButton'


class TopBar extends Component {
  render() {

    const style = {
        width: '100%',
        justifyContent: 'flex-end',
        padding: '1.75em'
    }
    const icon = {
      height: '30px',
      width: '30px'
    }

   return (

    <Navbar
    style={style}
    bg="dark"
    variant="dark"
    >
        <Nav>
            <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
         <Nav.Link>
           <ModalButton />
         </Nav.Link>
          <Nav.Link>
            <FaUserAlt style={icon} />
          </Nav.Link>
          <Nav.Link>
            <FaRegBell
              style={icon} />
          </Nav.Link>
        </Nav>
    </Navbar>

   )
  }
}

export default TopBar;
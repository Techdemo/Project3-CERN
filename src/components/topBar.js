import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Nav'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaUserAlt, FaRegBell } from 'react-icons/fa'
import ModalButton from './modelButton'
import PeopleOnline from './peopleOnline'

import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


class TopBar extends Component {
  render() {

    const style = {
        width: '100%',
        justifyContent: 'flex-end',
        padding: '1.75em'
    }
    const icon = {
      height: '30px',
      width: '30px',
    }
    const bellIcon = {
      height: '30px',
      width: '30px',
      marginLeft: '-2.25em',
    }

   return (

    <Navbar
    style={style}
    bg="dark"
    variant="dark"
    >
        <Nav>
         <ModalButton />
            <Form inline>
            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
         <Nav.Link>

         </Nav.Link>
          <Nav.Link>
            <FaUserAlt style={icon} />
          </Nav.Link>
          <Nav.Link>

          </Nav.Link>
          <Nav.Link>
             <OverlayTrigger
              trigger="click"
              key="bottom"
              placement='bottom'
              overlay={
                <Popover
                  id={`popover-positioned-bottom`}
                  title={`Notifications`}
                  >
                <strong>New Mention</strong> You have been mention in a new log
              </Popover>
               }
              >
          <FaRegBell
              style={bellIcon}
              trigger="click"
              id="bell" />

    </OverlayTrigger>
          </Nav.Link>
          <PeopleOnline />
        </Nav>
    </Navbar>

   )
  }
}

export default TopBar;
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import TextArea from 'react-mention-plugin';
import 'react-mention-plugin/lib/TextArea.css';


class ModalButton extends React.Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            show: false,
            disabled: true,
            value: ''
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        event.preventDefault();
        this.setState({ value: event.target.value });
        this.setState({ disabled: false })
    }


    handleSubmit(event) {
        this.setState({ show: false });
        event.preventDefault();

        let bell = document.getElementById("bell")
        bell.setAttribute('color', 'red')
        // append the value to the list
        let list = document.getElementById("List")
        let node = document.createElement("div")
        node.setAttribute("class", "list-group-item")

        let timeList = document.getElementById("timeList")
        let time = document.createElement("div")


        node.setAttribute("class", "list-group-item")
        time.setAttribute("class", "list-group-item")
        // getting time on making the log
        let today = new Date();
        let TheTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let timenode = document.createTextNode(TheTime)
        let textnode = document.createTextNode(this.state.value)

        time.appendChild(timenode)
        node.appendChild(textnode)

        timeList.appendChild(time)
        list.appendChild(node)

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }



    render() {
        const style = {
            marginRight: '1em'
        }
        const suggestions = [
            {
                id: 1,
                avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
                value: 'Sjerrie_Tukkel',
                label: 'Sjerrie Tukkel',
            },
            {
                id: 2,
                avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
                value: 'Gerrit_Alex',
                label: 'Gerrit Alex ',
            },
            {
                id: 3,
                avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
                value: 'Barry_Pooter',
                label: 'Barry Pooter',
            },
            {
                id: 4,
                avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
                value: 'David_Hofhazzel',
                label: 'David Hofhazzel',
            }
        ];
        return (
            <>
                <Button style={style} variant="primary" onClick={this.handleShow}>
                    Create new log
                </Button>
                <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new Log</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Add a title</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.value} type="textarea" placeholder="title" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Select a subtype</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Place Log</Form.Label>
                                <TextArea ref={textarea => this.textarea = textarea} suggestions={suggestions}> </TextArea>
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Submit" disabled={this.state.disabled}>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalButton
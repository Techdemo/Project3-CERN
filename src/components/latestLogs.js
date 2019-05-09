import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class latestLogs extends Component {

render(){

    const style = {
        marginBottom: '2em'
    }
    return (
        <Card style={style}>
            <Card.Header>Latest Logs</Card.Header>
            <Card.Body>
            <Card.Title>Latest Logs</Card.Title>
            <ListGroup variant="flush">
                <Row>
                    <Col xs={4}>
                        <ListGroup.Item>07:54 PM</ListGroup.Item>
                        <ListGroup.Item>08:52 PM</ListGroup.Item>
                        <ListGroup.Item>08:21 PM</ListGroup.Item>
                    </Col>
                    <Col>
                        <ListGroup.Item>New Log entered</ListGroup.Item>
                        <ListGroup.Item>New Log entered</ListGroup.Item>
                        <ListGroup.Item>New Log entered</ListGroup.Item>
                    </Col>
                </Row>
            </ListGroup>
            </Card.Body>
        </Card>
        )
    }
}

export default latestLogs
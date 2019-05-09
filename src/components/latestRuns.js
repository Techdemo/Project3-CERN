import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class latestRuns extends Component {

render(){
    return (
        <Card>
            <Card.Header>Latest Runs</Card.Header>
            <Card.Body>
            <Card.Title>Latest runs</Card.Title>
            <ListGroup variant="flush">
                <Row>
                    <Col xs={4}>
                        <ListGroup.Item>07:54 PM</ListGroup.Item>
                        <ListGroup.Item>08:52 PM</ListGroup.Item>
                        <ListGroup.Item>08:21 PM</ListGroup.Item>
                    </Col>
                    <Col>
                        <ListGroup.Item>New Run entered</ListGroup.Item>
                        <ListGroup.Item>New Run entered</ListGroup.Item>
                        <ListGroup.Item>New Run entered</ListGroup.Item>
                    </Col>
                </Row>
            </ListGroup>
            </Card.Body>        
        </Card>
        )
    }
}

export default latestRuns
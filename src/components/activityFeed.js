import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class activityFeed extends Component {

render(){
    const style = {
        height: '100%'
    }
    return (
        <Card style={style}>
            <Card.Header>Activity feed</Card.Header>
            <Card.Body>
            <Card.Title>Latest activities</Card.Title>
            <ListGroup variant="flush">
                <Row>
                    <Col xs={4}>
                        <ListGroup.Item>10:00 PM</ListGroup.Item>
                        <ListGroup.Item>09:55:PM</ListGroup.Item>
                        <ListGroup.Item>08:34 PM</ListGroup.Item>
                    </Col>
                    <Col>
                        <ListGroup.Item>New Log entered</ListGroup.Item>
                        <ListGroup.Item>New Log entered</ListGroup.Item>
                        <ListGroup.Item>New Run entered</ListGroup.Item>
                    </Col>
                </Row>
            </ListGroup>
            </Card.Body>        
        </Card>
        )
    }
}

export default activityFeed 
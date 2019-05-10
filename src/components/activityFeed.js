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
                    <Col id="timeList" xs={4}>

                    </Col>
                    <Col id="List">

                    </Col>
                </Row>
            </ListGroup>
            </Card.Body>
        </Card>
        )
    }
}

export default activityFeed
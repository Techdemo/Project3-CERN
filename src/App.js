import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sideBar';
import TopBar from './components/topBar'
import ActivityFeed from './components/activityFeed'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LatestLogs from './components/latestLogs'
import LatestRuns from './components/latestRuns'
// eslint-disable-next-line
import { connect } from './api/index'

class App extends Component {
  constructor(props){
    super(props);

    connect(message => {
      console.log(message)
    })
  }
  render() {


    return (
      <Container
      fluid='true'>
        <Row>
          <TopBar />
        </Row>
          <Row>
            <Col xs={2}><SideBar /></Col>
            <Col><ActivityFeed /></Col>
            <Col>
              <LatestLogs />
              <LatestRuns />
            </Col>
        </Row>
        </Container>
    )
  }
}

export default App;
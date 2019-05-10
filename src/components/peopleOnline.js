import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge'

class peopleOnline extends Component {
    render() {
        const style = {
            marginTop: '1em'
        }
        return (
            <Badge pill variant="success">
                <p style={style} id="Count"></p>
            </Badge>
        )
    }
}

export default peopleOnline;
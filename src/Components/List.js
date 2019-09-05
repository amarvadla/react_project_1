import React, { Component } from 'react';

class List extends Component {
    render() {
           return <ol>{this.props.tasks.map((task, index) => React.createElement('li', { key: index }, task))
           }</ol>
    }
}

export default List
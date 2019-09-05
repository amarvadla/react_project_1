import React, { Component } from 'react';
import Title from './Title';
import List from './List'

class Main extends Component {
    render() {
           return <div>
                  <Title title={"PhotoWall"}/>
                  <List tasks={["get up 8:00", "take a ride", "fill up the form"]} />
           </div>
    }
}

export default Main
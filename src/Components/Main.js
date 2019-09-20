import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './photowall'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'
import { removePosts } from '../redux/action'
import {Link} from 'react-router-dom'

class Main extends Component {

       constructor() {
              super()
       }

       render() {
              // console.log(this.props)
              return (
                     <div>
                            <h1>
                                   <Link to="/"> PhotoWall</Link>
                            </h1>
                            <Route exact path='/' render={() => (
                                   <div>
                                          <PhotoWall {...this.props}></PhotoWall>
                                   </div>
                            )} />
                            <Route path="/AddPhoto" render={({ history }) => (
                                   <div>
                                          <AddPhoto {...this.props} onHistory={history} />
                                   </div>
                            )} />

                     </div>

              )
       }
}


export default Main
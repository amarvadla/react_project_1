import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './photowall'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'

class Main extends Component {

       constructor() {
              super()
       }

       render() {
              return (
                     <div>
                            <Route exact path='/' render={() => (
                                   <div>
                                          <Title title={"PhotoWall"} />
                                          <PhotoWall posts={this.props.posts}></PhotoWall>
                                   </div>
                            )} />
                            {/* <Route path="/AddPhoto" render={({ history }) => (
                                   <div>
                                          <AddPhoto onAddphoto={(addedPost) => {
                                                 this.addPhoto(addedPost)
                                                 history.push('/')
                                          }} />
                                   </div>
                            )} /> */}

                     </div>

              )
       }
}


export default Main
import React, { Component } from 'react'
import Photo from './photo'

class Single extends Component {

    render() {
        const {match , posts} = this.props
        const id = String(match.params.id)
        const post = posts.find((post) => post.id === id)
        console.log(post);
        
        return (
            <div className='single-photo'>
                <Photo post={post}/>
            </div>
        )
    }

}

export default Single
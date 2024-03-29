import React, { Component } from 'react'
import Photo from './photo'
import Comments from './Comments'

class Single extends Component {

    render() {
        const { match, posts } = this.props
        const id = String(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        return (
            <div className='single-photo'>
                <Photo post={post} index = {index} {...this.props}/>
                <Comments addComment={this.props.addComment} comments={comments} id={id} />
            </div>
        )
    }

}

export default Single
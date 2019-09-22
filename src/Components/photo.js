import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Photo extends Component {
    render() {
        const post = this.props.post;
        return (
            <figure className="figure">
                <Link to={`/single/${post.id}`}>

                    <img className="photo" src={post.imageLink} alt={post.description}></img>
                </Link>
                <figcaption><p>
                    {post.description}
                </p></figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick={
                        () => {
                            this.props.removePosts(this.props.index)
                            this.props.history.push('/')
                        }
                    }>remove</button>
                    <Link className="button">
                        <div>
                            {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                        </div>
                    </Link>
                </div>

            </figure>

        )
    }
}

export default Photo
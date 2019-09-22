import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Photo extends Component {
    render() {
        const post = this.props.post;
        return (
            <Link to={`/single/${post.id}`}>

                <figure className="figure">
                    <img className="photo" src={post.imageLink} alt={post.description}></img>
                    <figcaption><p>
                        {post.description}
                    </p></figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick={
                            () => {
                                this.props.removePosts(this.props.index)
                            }
                        }>remove</button>
                    </div>
                </figure>

            </Link>
        )
    }
}

export default Photo
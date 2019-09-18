import React, { Component } from 'react';
import Photo from './photo';
import {Link} from 'react-router-dom'

function PhotoWall(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"> + </Link>
            <div className="photoGrid">
                {props.posts
                .sort((x,y) => {
                    return y.id - x.id
                })
                .map((post, index) => {
                    return <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
                })}
            </div>
        </div>)
}


export default PhotoWall
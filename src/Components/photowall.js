import React, { Component } from 'react';
import Photo from './photo';

function PhotoWall(props) {
    return <div className="photoGrid">
        {props.posts.map((post, index) => {
            return <Photo key={index} post={post} onRemovePhoto= {props.onRemovePhoto} />
        })}
    </div>
}


export default PhotoWall
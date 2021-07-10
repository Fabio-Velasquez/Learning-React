import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
const CommentDetail = (props) => {
    return (
    <div className = "comment">
        <a href = "/" className = "avatar">
            <img alt = "avatar" src = {props.imageAvatar} />
        </a>
        <div className = "content">
            <a href = "/" className = "author">
                {props.author}
            </a>
            <div className = "metadata">
                <span className = "date">{props.timeAgo}</span>
            </div>
            <div className = "text">{props.text}</div>
        </div>
    </div>


    );


}
// this line means that any file in the project can have access to this componenet.
export default CommentDetail;
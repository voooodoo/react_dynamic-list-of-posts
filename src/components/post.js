import React from 'react';
import User from './user';
import CommentList from './comment-list';

const Post = ({ post }) => {
  const { title, body, user, comments } = post;
  return (
    <li className="list-group-item d-flex justify-content-center align-items-center p-0 border-0">
      <div className="card border-0 bg-primary text-white mb-3">
        <h4 className="card-header">{title}</h4>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">
            <User user={user} />
          </h6>
          <p className="card-text">{body}</p>
          <CommentList comments={comments} />
        </div>
      </div>
    </li>
  );
};

export default Post;

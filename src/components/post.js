import React from 'react';
import User from './user';
import CommentList from './comment-list';

const Post = ({ post }) => {
  const { title, body, user } = post;
  return (
    <li className="list-group-item d-flex justify-content-center align-items-center">
      <div className="card border-0">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            <User user={user} />
          </h6>
          <p className="card-text">{body}</p>
          <CommentList />
        </div>
      </div>
    </li>
  );
};

export default Post;

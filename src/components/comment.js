import React from 'react';

const Comment = ({ comment }) => {
  const { name, body, email } = comment;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center bg-secondary">
      <div className="card border-0 bg-secondary">
        <h6 className="card-subtitle">
          {name}({email})
        </h6>
        <p className="card-text">{body}</p>
      </div>
    </li>
  );
};

export default Comment;

import React from 'react';
import Comment from './comment';

const CommentList = ({ comments }) => {
  return (
    <>
      <h5 className="mb-1">Comments</h5>
      <ul className="list-group list-group-flush">
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </>
  );
};

export default CommentList;

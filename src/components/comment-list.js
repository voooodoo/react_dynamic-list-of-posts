import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <>
      <h5 className="mb-1">Comments</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center">Cras justo odio</li>
      </ul>
    </>
  );
};

export default CommentList;

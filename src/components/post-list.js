import React from 'react';

const PostList = props => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span className="badge badge-primary badge-pill">14</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span className="badge badge-primary badge-pill">2</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="/" className="card-link">
              Card link
            </a>
            <a href="/" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PostList;

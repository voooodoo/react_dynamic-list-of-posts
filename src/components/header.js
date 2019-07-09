import React from 'react';

const Header = ({ applyFilter }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-between">
            <div className="navbar-brand">react_dynamic-list-of-posts</div>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                onChange={event => {
                  applyFilter(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

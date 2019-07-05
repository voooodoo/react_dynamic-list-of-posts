import React, { Component } from 'react';

class Header extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.applyFilter(this.state.search);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-between">
              <div className="navbar-brand">react_dynamic-list-of-posts</div>
              <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleChange} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

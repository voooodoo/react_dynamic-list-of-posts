import React, { Component } from 'react';
import Header from './header';
import ApiService from '../services/api-service';
import PostList from './post-list';

class App extends Component {
  state = {
    posts: [],
    isLoading: false,
  };

  apiService = new ApiService();

  dowloadPost = () => {
    this.setState({ isLoading: true });

    this.apiService.getPosts().then(posts => {
      this.setState({
        posts,
        isLoading: false,
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              <button type="button" className="btn btn-info" onClick={this.dowloadPost}>
                Download Posts
              </button>
              <PostList />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

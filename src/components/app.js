import React, { Component } from 'react';
import Header from './header';
import ApiService from '../services/api-service';
import PostList from './post-list';

class App extends Component {
  state = {
    posts: [],
    users: [],
    comments: [],
    isLoading: false,
  };

  apiService = new ApiService();

  dowloadPost = () => {
    this.setState({ isLoading: true });

    const { getPosts, getUsers, getComments } = this.apiService;

    Promise.all([getPosts(), getUsers(), getComments()]).then(([posts, users, comments]) => {
      this.setState({
        posts,
        users,
        comments,
        isLoading: false,
      });
      console.log(this.state);
    });
  };

  getPostWithData(posts, users, comments) {
    const newPosts = posts.map(post => {
      return {
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: comments.filter(comment => comment.postId === post.id),
      };
    });
    return newPosts;
  }

  render() {
    const { isLoading, posts, users, comments } = this.state;
    let showedPosts = [];
    if (posts) {
      showedPosts = this.getPostWithData(posts, users, comments);
      console.log(showedPosts);
    }
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              {isLoading ? (
                <span>Loading...</span>
              ) : posts.length > 0 ? (
                <PostList posts={showedPosts} />
              ) : (
                <button type="button" className="btn btn-info" onClick={this.dowloadPost}>
                  Download Posts
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

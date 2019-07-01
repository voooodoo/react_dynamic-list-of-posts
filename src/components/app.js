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
    filter: '',
  };

  dowloadPosts = () => {
    this.setState({ isLoading: true });

    const { getPosts, getUsers, getComments } = ApiService;

    Promise.all([getPosts(), getUsers(), getComments()]).then(([posts, users, comments]) => {
      this.setState({
        posts,
        users,
        comments,
        isLoading: false,
      });
    });
  };

  applyFilter = key => {
    if (key !== this.state.filter) {
      this.setState({ filter: key });
    }
  };

  getPostWithData(posts, users, comments, filter) {
    const newPosts = posts
      .filter(({ body }) => body.toLowerCase().includes(filter.toLowerCase()))
      .map(post => {
        return {
          ...post,
          user: users.find(user => user.id === post.userId),
          comments: comments.filter(comment => comment.postId === post.id),
        };
      });
    return newPosts;
  }

  render() {
    const { isLoading, posts, users, comments, filter } = this.state;
    const showedPosts = posts ? this.getPostWithData(posts, users, comments, filter) : [];
    return (
      <>
        <Header applyFilter={this.applyFilter} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              {isLoading ? (
                <span>Loading...</span>
              ) : posts.length > 0 ? (
                <PostList posts={showedPosts} />
              ) : (
                <button type="button" className="btn btn-info" onClick={this.dowloadPosts}>
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

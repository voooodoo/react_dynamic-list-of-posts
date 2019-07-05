import React, { Component } from 'react';
import Header from './header';
import ApiService from '../services/api-service';
import PostList from './post-list';

class App extends Component {
  state = {
    posts: [],
    showedPosts: [],
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
        showedPosts: this.getPostWithData(posts, users, comments, this.state.filter),
      });
    });
  };

  applyFilter = key => {
    if (key !== this.state.filter) {
      const { posts, users, comments } = this.state;
      this.setState({ filter: key }, () =>
        this.setState({ showedPosts: this.getPostWithData(posts, users, comments, this.state.filter) })
      );
    }
  };

  getPostWithData(posts, users, comments, filter) {
    return posts
      .filter(({ body }) => body.toLowerCase().includes(filter.toLowerCase()))
      .map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: comments.filter(comment => comment.postId === post.id),
      }));
  }

  render() {
    const { isLoading, showedPosts } = this.state;
    let content;
    if (isLoading) {
      content = <span>Loading...</span>;
    } else {
      content =
        showedPosts.length > 0 ? (
          <PostList posts={showedPosts} />
        ) : (
          <button type="button" className="btn btn-info" onClick={this.dowloadPosts}>
            Download Posts
          </button>
        );
    }

    return (
      <>
        <Header applyFilter={this.applyFilter} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">{content}</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

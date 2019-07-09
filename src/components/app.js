import React, { Component } from 'react';
import Header from './header';
import ApiService from '../services/api-service';
import PostList from './post-list';
import debounce from '../helpers/debounce';

class App extends Component {
  state = {
    posts: [],
    showedPosts: [],
    users: [],
    comments: [],
    isLoading: false,
    query: '',
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
        showedPosts: this.getPostWithData(posts, users, comments, this.state.query),
      });
    });
  };

  applyFilter = debounce(query => {
    if (query !== this.state.query) {
      const { posts, users, comments } = this.state;

      this.setState({ query, showedPosts: this.getPostWithData(posts, users, comments, query) });
    }
  }, 500);

  getPostWithData(posts, users, comments, query) {
    const normalizedQuery = query.toLowerCase();
    return [...posts]
      .filter(({ body, title }) => {
        const searchString = `${title}\n${body}`.toLowerCase();
        return searchString.includes(normalizedQuery);
      })
      .map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: comments.filter(comment => comment.postId === post.id),
      }));
  }

  render() {
    const { isLoading, showedPosts, posts } = this.state;
    const spinner = isLoading ? <div className="spinner spinner-border text-primary"></div> : null;

    return (
      <>
        <Header applyFilter={this.applyFilter} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              {spinner}
              <PostList posts={showedPosts} />
              {showedPosts.length === 0 && posts.length > 0 ? 'Nothing' : null}
              <button
                type="button"
                className={`btn btn-info ${isLoading || posts.length > 0 ? 'd-none' : null}`}
                onClick={this.dowloadPosts}
              >
                Download Posts
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

import React from 'react';
import Post from './post';

const PostList = ({ posts }) => {
  return (
    <ul className="list-group">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostList;

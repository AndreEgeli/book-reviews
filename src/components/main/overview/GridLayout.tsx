import React from 'react';
import PostCard from './PostCard';

interface GridLayoutProps {
  posts: any[];
}

function GridLayout(props: GridLayoutProps) {
  const { posts } = props;

  return (
    <div>
      <h1>Recent Reviews</h1>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}

export default GridLayout;

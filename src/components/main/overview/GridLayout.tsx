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
      <div className="grid grid-cols-1 gap-4 w-full mt-4">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default GridLayout;

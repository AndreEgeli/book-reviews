import React from 'react';
import { PostCard } from './post-card';
interface GridLayoutProps {
  posts: any[];
}

function GridLayout(props: GridLayoutProps) {
  const { posts } = props;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 w-full mt-4">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}

export default GridLayout;

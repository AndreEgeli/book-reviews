import React from 'react';

interface PostCardProps {
  post: any;
}

function PostCard(props: PostCardProps) {
  const { post } = props;
  return (
    <div key={post.id} className="bg-slate-100 p-4 my-2 rounded-md">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostCard;

import React from 'react';
import { cn } from '@/lib/utils';
import possibleTags from '@/utils/tags';

interface PostCardProps {
  post: any;
}

const Star = ({ number }) => {
  return (
    <>
      {Array.from({ length: number }, (_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3.5l1.55 3.75h4.95l-3.75 2.75 1.55 3.75-3.95-2.75-3.95 2.75 1.55-3.75-3.75-2.75h4.95l1.55-3.75z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </>
  );
};

function PostCard(props: PostCardProps) {
  const { post } = props;

  return (
    <div className="relative mx-auto w-full">
      <a
        href="#"
        className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
      >
        {/* <div className="flex shadow p-4 rounded-lg bg-white"> */}
        <div className="flex shadow p-4 rounded-lg bg-white">
          <div className="md:w-4/10 mr-4">
            {' '}
            {/* Adjust this className for your image */}
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="md:w-6/10">
            {' '}
            {/* Adjust this className for your content */}
            <h2 className="font-medium text-base md:text-lg text-gray-800">
              {post.book}
            </h2>
            <p className="mt-2 text-sm text-gray-800">{post.content}</p>
            {/* show more post info here */}
            <p className="mt-2 text-sm text-gray-800">
              {post.createdAt.toString()}
            </p>
            <p className="ml-2 text-gray-800 line-clamp-1">
              {post.author ?? 'No author'}
            </p>
            <div className="float-right flex items-center mt-2">
              <span className="text-sm">{post.rating}</span>
              <Star number={post.rating} />
            </div>
          </div>
          {/* </div> */}
        </div>
      </a>
    </div>
  );
}

export default PostCard;

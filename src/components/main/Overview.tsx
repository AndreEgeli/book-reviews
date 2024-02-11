'use client';

import { useEffect, useState } from 'react';

import posts from '../../utils/posts';
import SearchBar from './overview/SearchBar';
import GridLayout from './overview/GridLayout';

function Overview() {
  const [searchSentence, setSearchSentence] = useState('');

  useEffect(() => {
    posts.filter((post) => {
      if (post.title.toLowerCase().includes(searchSentence.toLowerCase())) {
        console.log('post.title: ', post.title);
      }
    });
  }, [searchSentence]);

  return (
    <>
      <div className="bg-slate-200 p-10 rounded-md">
        <h1>Welcome André!</h1>
        <SearchBar
          searchSentence={searchSentence}
          setSearchSentence={setSearchSentence}
        />
        <GridLayout posts={posts} />
      </div>
    </>
  );
}

export default Overview;

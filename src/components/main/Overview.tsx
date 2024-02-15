'use client';

import { useEffect, useState } from 'react';

import posts from '../../utils/posts';
import tags from '../../utils/tags';
import SearchBar from '../common/SearchBar';
import GridLayout from './overview/GridLayout';
import FilterBar from './overview/FilterBar';
import AddNewReview from './overview/AddNewReview';

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
      <div>
        <h1>Welcome André!</h1>
        <div className="flex">
          <SearchBar
            searchSentence={searchSentence}
            setSearchSentence={setSearchSentence}
          />
          <FilterBar />
          <AddNewReview />
        </div>
        <div className="float">
          <GridLayout posts={posts} />
        </div>
      </div>
    </>
  );
}

export default Overview;

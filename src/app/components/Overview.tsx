'use client';
import { useEffect, useState } from 'react';

import posts from '../../utils/posts';
import tags from '../../utils/tags';
import SearchBar from '@/components/common/SearchBar';
import GridLayout from './overview/GridLayout';
import FilterBar from './overview/FilterBar';
import AddNewReview from './overview/AddNewReview';

function Overview() {
  const [searchSentence, setSearchSentence] = useState('');

  return (
    <>
      <h1>Welcome André!</h1>
      <div className="flex">
        <SearchBar
          searchSentence={searchSentence}
          setSearchSentence={setSearchSentence}
        />
        <FilterBar />
        {/* <AddNewReview /> */}
      </div>
      <div className="float">
        <GridLayout posts={posts} />
      </div>
    </>
  );
}

export default Overview;

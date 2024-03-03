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
    <div className="pt-12 border border-gray-100">
      <div className="flex border border-gray-300 rounded">
        <div className="w-1/3">
          <FilterBar />
        </div>
        <div className="">
          <h1>Welcome André!</h1>
          <SearchBar
            searchSentence={searchSentence}
            setSearchSentence={setSearchSentence}
          />

          {/* <AddNewReview /> */}
          <div className="flex-grow">
            <GridLayout posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

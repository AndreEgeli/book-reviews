'use client';
import React from 'react';

import advancedBooks from '@/utils/advancedBooks';
import BookCard from './BookCard';
import SearchBar from '@/components/common/SearchBar';

interface BooksProps {
  books: any[];
}

interface Book {
  _id: number;
  title: string;
  isbn: string;
  pageCount: number;
  publishedDate: { $date: string };
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
}

function Books() {
  const [search, setSearch] = React.useState('');

  return (
    <>
      <div>
        <div className="flex justify-center my-4">
          <h1 className="center text-3xl font-bold">Books</h1>
        </div>
        <div>
          <SearchBar searchSentence={search} setSearchSentence={setSearch} />
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          {advancedBooks.map((book) => {
            return <BookCard key={book._id} book={book} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Books;

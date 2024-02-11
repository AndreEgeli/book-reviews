import React from 'react';

interface BookCardProps {
  book: any;
}

function BookCard(props: BookCardProps) {
  const { book } = props;
  return (
    <div className="p-1">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={book.thumbnailUrl} alt={book.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base">
            {book.shortDescription
              ? book.shortDescription.substring(0, 116)
              : 'No description'}
            ...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {book.categories.map((category: string) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {category}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BookCard;

import React from 'react';
import Book from './Book/Book.js';

export default function BookList({ bookList }) {
  const noResultMsg = 'No matching results. Please try again.'
  const bookResults = bookList
    ? bookList.map((book, i) => {
        return (
          <li key={i}>
            <Book
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors && book.volumeInfo.authors[0]}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}
              image={book.volumeInfo.imageLinks.smallThumbnail}
            />
          </li>
        );
      })
    : noResultMsg
  return (
    <div>
      <ul>{bookResults}</ul>
    </div>
  );
}

BookList.defaultProps = {
  bookList: [],
};

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
// import Form from './Form';
// import { getBookApi } from '../redux/books/books';

const Books = () => {
  // const dispatch = useDispatch();
  // const books = useSelector((state) => state.books);
  const books = [
    {
      id: 1,
      author: 'George',
      name: 'Thrones',
    },
    {
      id: 2,
      author: 'Georgie',
      name: 'Thornes',
    },
  ];
  // useEffect(() => {
  //   dispatch(getBookApi());
  // }, []);

  return (
    <div className="books">
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.name}
          author={book.author}
        />
      ))}
      <hr />
      {/* <Form /> */}
    </div>
  );
};

export default Books;

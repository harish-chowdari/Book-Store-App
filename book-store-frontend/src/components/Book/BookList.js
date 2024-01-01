import React, { useEffect, useState } from 'react';
import Book from './Book';
import axios from 'axios';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch your list of books from the API or any other source
    // For example, you can use axios or fetch
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:6007/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error.message);
      }
    };

    fetchBooks();
  }, []); // Make sure to adjust the dependencies based on your use case

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

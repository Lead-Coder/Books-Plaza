import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { Book } from '../types';
import { getBooks } from '../api';

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedBooks = await getBooks();
      setBooks(fetchedBooks);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;


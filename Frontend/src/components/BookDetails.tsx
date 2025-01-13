import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../types';
import { getBookById } from '../api';
import { useCart } from './CartContext';

const BookDetails = () => {
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        const fetchedBook = await getBookById(parseInt(id, 10));
        setBook(fetchedBook);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(book);
    alert(`${book.title} is added to cart`)
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row">
        <img src={book.cover} alt={book.title} className="w-full md:w-1/3 h-auto object-contain rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          <p className="text-2xl text-blue-600 font-bold mb-4">${book.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{book.description}</p>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleAddToCart}>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;


import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="pt-3">
      <img src={book.cover} alt={book.title} className="w-full h-48 object-contain" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <p className="text-blue-600 font-bold mb-4">${book.price.toFixed(2)}</p>
        <Link
          to={`/book/${book.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;


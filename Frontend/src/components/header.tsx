import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/book" className="text-2xl font-bold">Books Plaza</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/book" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/cart" className="hover:text-blue-200">Cart</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


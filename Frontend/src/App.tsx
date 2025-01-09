import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import About from './components/About';
import SignUp from './components/signup';
import Login from './components/login';
import { CartProvider } from './components/CartContext';
//import { AuthProvider } from './AuthContext';

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <HeaderWrapper>
          <div className="min-h-screen bg-gray-400">
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/book" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </HeaderWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;


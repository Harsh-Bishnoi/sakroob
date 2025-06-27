import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import AddToCart from './components/AddToCart';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Hero from './components/Hero';
import ListSlider from './components/ListSlider';
import LogIn from './components/LogIn';
import Product from './components/Product';
import SignUp from './components/SignUp';
import Support from './components/Support';
import Testimonials from './components/Testimonials';
import Bestsellers from './components/Bestsellers';
import CheckOut from './components/CheckOut';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import BackToTop from './components/common/BackToTop';
import BlogLogs from './components/BlogLogs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const AppRoutes = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const currentPath = window.location.pathname;
      if (isLoggedIn && (currentPath === '/login' || currentPath === '/signup')) {
        navigate('/');
      }
    }, [isLoggedIn, navigate]);

    const handleLogIn = () => {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    };

    return (
      <>
        {isLoggedIn && <Header />}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn onLogIn={handleLogIn} />} />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <ListSlider />
                  <Hero />
                  <Support />
                  <Product />
                  <Bestsellers />
                  <BlogLogs />
                  <Testimonials />
                </>
              ) : (
                <LogIn onLogIn={handleLogIn} />
              )
            }
          />
          <Route
            path="/productdetail"
            element={isLoggedIn ? <ProductDetail /> : <LogIn onLogIn={handleLogIn} />}
          />
          <Route
            path="/addToCart"
            element={isLoggedIn ? <AddToCart /> : <LogIn onLogIn={handleLogIn} />}
          />
          <Route
            path="/checkout"
            element={isLoggedIn ? <CheckOut /> : <LogIn onLogIn={handleLogIn} />}
          />
        </Routes>
        {isLoggedIn && <Footer />}
        <BackToTop />
      </>
    );
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
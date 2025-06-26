import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import AddToCart from './components/AddToCart';
import Blog from './components/Blog';
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
// import ProductDetail from './components/ProductDetail';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(() => {
    return localStorage.getItem('isSignedUp') === 'true';
  });

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

    const handleSignUp = () => {
      setIsSignedUp(true);
      localStorage.setItem('isSignedUp', 'true');
    };

    const handleLogIn = () => {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    };

    return (
      <>
        {isLoggedIn && <Header />}
        <Routes>
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
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
                  <Blog />
                  <Testimonials />
                  <CheckOut />
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
        </Routes>
        {isLoggedIn && <Footer />}
      </>
    );
  };

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
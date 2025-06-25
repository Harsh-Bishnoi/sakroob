import { useState } from 'react'
import './App.css'
import AddToCart from './components/AddToCart'
import Blog from './components/Blog'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Hero from './components/Hero'
import ListSlider from './components/ListSlider'
import LogIn from './components/LogIn'
import Product from './components/Product'
import SignUp from './components/SignUp'
import Support from './components/Support'
import Testimonials from './components/Testimonials'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bestsellers from './components/Bestsellers'

function App() {
  const [isSignedUp, setIsSignedUp] = useState(() => {
    return localStorage.getItem('isSignedUp') === 'true'
  })

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  const handleSignUp = () => {
    setIsSignedUp(true)
    localStorage.setItem('isSignedUp', 'true')
  }

  const handleLogIn = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  if (!isSignedUp) {
    return <SignUp onSignUp={handleSignUp} />
  }

  if (!isLoggedIn) {
    return <LogIn onLogIn={handleLogIn} />
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <ListSlider />
              <Hero />
              <Support />
              <Product />
              <Bestsellers />
              <Blog />
              <Testimonials />
            </>
          } />
          <Route path="/addToCart" element={<AddToCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
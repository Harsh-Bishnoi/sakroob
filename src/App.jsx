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
      <Header />
      <ListSlider />
      <Hero />
      <Support />
      <Product />
      <Blog />
      <Testimonials />
      <Footer />
      <AddToCart />
    </>
  )
}

export default App
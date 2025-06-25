import './App.css'
import AddToCart from './components/AddToCart'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ListSlider from './components/ListSlider'
import LogIn from './components/LogIn'
import Product from './components/Product'
import SignUp from './components/SignUp'
import Support from './components/Support'
import Testimonials from './components/Testimonials'

function App() {

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
      <LogIn />
      <SignUp />
    </>
  )
}

export default App

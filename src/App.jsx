import './App.css'
import AddToCart from './components/AddToCart'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ListSlider from './components/ListSlider'
import Product from './components/Product'
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
    </>
  )
}

export default App

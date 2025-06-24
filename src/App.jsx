import './App.css'
import AddToCart from './components/AddToCart'
import Hero from './components/Hero'
import ListSlider from './components/ListSlider'
import Product from './components/Product'
import Support from './components/Support'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <ListSlider />
      <Hero />
      <Support />
      <Product />
      <Testimonials />
      <AddToCart />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Nav from './components/Nav/Nav.jsx'
import Testimonials from './components/Nav/Slider/Testimonials.jsx'
import TinyCarts from './components/TinyCarts/TinyCarts.jsx'
import { Product } from './components/Product/Product.jsx'
import Vision from './components/Vision/Vision.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Nav/>
    <Testimonials/>
    <TinyCarts/>
    <Product/>
    <Vision/>
    <Footer/>
  </StrictMode>
)

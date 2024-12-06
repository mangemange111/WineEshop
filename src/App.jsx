import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Whites from './pages/Whites';
import Reds from './pages/Reds';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Cart from './components/Cart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whites" element={<Whites />} />
          <Route path="/reds" element={<Reds />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

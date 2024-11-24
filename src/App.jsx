import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Whites from './pages/Whites';
import Reds from './pages/Reds';
import Navbar from './components/Navbar'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whites" element={<Whites />} />
          <Route path="/reds" element={<Reds />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App

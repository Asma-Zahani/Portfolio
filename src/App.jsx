import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './pages/Header'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add('preloaded');
        }, 800);
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <BrowserRouter>
      <div id="preloader">
        <div className="line"></div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
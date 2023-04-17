
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:productId' element={<ProductDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;

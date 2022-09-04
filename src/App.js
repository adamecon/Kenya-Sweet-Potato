
import './App.css';
import Home from './Components/Home/Home';

import Header from './Components/Common/heading/Header'
import About from './Components/about/About';
import ProductHome from './Components/products/ProductHome'
import Team from './Components/team/Team';
import Pricing from './Components/pricing/Pricing';
import Contact from './Components/contact/Contact';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Blog from './Components/blogs/Blog';
import Footer from './Components/Common/footer/Footer';

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<ProductHome />}></Route>
            <Route path="/products" element={<ProductHome />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        
        
        
        
        </BrowserRouter>

       
      
      
      </>
      
    </div>
  );
}

export default App;

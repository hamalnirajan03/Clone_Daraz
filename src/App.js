import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/login';
import Navbar from './components/navbar/Navbar';
import { GlobalStyle } from './GlobalStyle';
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

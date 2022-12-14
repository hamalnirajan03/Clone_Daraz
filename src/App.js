import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/login';
import Navbar from './components/navbar/Navbar';
import Signup from './components/signup/SignUp';
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
          <Route path="/signup" element={ <Signup />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;

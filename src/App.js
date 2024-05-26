import logo from './logo.svg';
import './App.css';
// import { Layout } from './components/layouts/Layout';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

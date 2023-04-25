import '../styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home.js'
import About from './About/About.js'
import HousingSheet from './HousingSheet/HousingSheet';
import Error404 from './Error404/Error404'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housingsheet/:id" element={<HousingSheet />} />
        <Route path="/housingsheet/*" element={<Error404 />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

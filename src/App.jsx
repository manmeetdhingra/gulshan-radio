import "./App.css"
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer';
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schedule from "./Pages/Schedule/Schedule";
import Presenters from "./Pages/Presenters/Presenters";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {

  return (
    <div>
      
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="schedule" element={<Schedule />}/>
      <Route path="presenters" element={<Presenters />}/>
      <Route path="gallery" element={<Gallery />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App

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
import Monday from "./Pages/Schedule/Days/Monday";
import Tuesday from "./Pages/Schedule/Days/Tuesday";
import Wednesday from "./Pages/Schedule/Days/Wednesday";
import Thursday from "./Pages/Schedule/Days/Thursday";
import Friday from "./Pages/Schedule/Days/Friday";
import Saturday from "./Pages/Schedule/Days/Saturday";
import Sunday from "./Pages/Schedule/Days/Sunday";


function App() {

  return (
    <div className="app-container">
      
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="schedule" element={<Schedule />}/>
      <Route path="presenters" element={<Presenters />}/>
      <Route path="gallery" element={<Gallery />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="/schedule/monday" element={<Monday />}/>

      <Route path="/schedule/tuesday" element={<Tuesday />}/>

      <Route path="/schedule/wednesday" element={<Wednesday />}/>

      <Route path="/schedule/thursday" element={<Thursday />}/>

      <Route path="/schedule/friday" element={<Friday />}/>
      
      <Route path="/schedule/saturday" element={<Saturday />}/>

      <Route path="/schedule/sunday" element={<Sunday />}/>

      <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App

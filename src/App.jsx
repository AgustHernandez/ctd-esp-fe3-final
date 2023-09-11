import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
            <Routes>
              <Route index element={<Home/>} />
              <Route path="detail/:id" element={<Detail/>} />
              <Route path="favs" element={<Favs/>} />
              <Route path="contact" element={<Contact/>} />
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

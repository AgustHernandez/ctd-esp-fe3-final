import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import './App.css';
import Layout from "./Components/Layout";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Navbar/>
              <Routes>
                <Route index element={<Home/>} />
                <Route path="detail/:id" element={<Detail/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="contact" element={<Contact/>} />
              </Routes>
            <Footer/>
          </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;

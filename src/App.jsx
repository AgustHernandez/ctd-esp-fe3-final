import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import './App.css';
import { useGlobalContext } from "./Components/utils/global.context";


function App() {
  const {state} = useGlobalContext();

  return (
    <BrowserRouter>
      <div className={state.theme.name === "LIGHT" ? 'appLight' : 'appDark'}>
          <Navbar/>
              <Routes>
                <Route index element={<Home/>} />
                <Route path="detail/:id" element={<Detail/>} />
                <Route path="favs" element={<Favs/>} />
                <Route path="favs/detail/:id" element={<Detail/>} />
                <Route path="contact" element={<Contact/>} />
              </Routes>
            <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

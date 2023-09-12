import React, { useContext } from 'react'
import "../App.css";
import { NavLink } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from '@mui/material';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {  

  return (
    <header>
      <nav className='header'>
          <NavLink to="/" className='brand'>Clínica <br/> Médica</NavLink>
          <div className='contenedorMenu'>
              <ul className='menu'>
                  <NavLink to="/" className="menuLista">HOME</NavLink>
                  <NavLink to="/favs" className="menuLista">DESTACADOS</NavLink>
                  <NavLink to='/contact' className="menuLista">CONTACTO</NavLink>
              </ul>
              <IconButton>
                <DarkModeOutlinedIcon className='darkMode'/>
              </IconButton>
          </div>
      </nav>
    </header>
  )
}

export default Navbar

//<button onClick={handleChangeTheme} style={{background: themes.background, color:themes.font}}>Change theme</button>
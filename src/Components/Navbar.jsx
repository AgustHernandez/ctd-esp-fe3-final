import "../App.css";
import { NavLink } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Button } from '@mui/material';
import { useGlobalContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {  
  const {state, dispatch} = useGlobalContext();

  return (
    <header>
      <nav className= 'header'>
          <NavLink to="/" className='brand'>Clínica <br/> Médica</NavLink>
          <div className='contenedorMenu'>
              <ul className='menu'>
                  <NavLink to="/" className="menuLista">HOME</NavLink>
                  <NavLink to="/favs" className="menuLista">DESTACADOS</NavLink>
                  <NavLink to='/contact' className="menuLista">CONTACTO</NavLink>
              </ul>
              { state.theme.name === "LIGHT" ?
                <Button onClick={()=>dispatch({type: 'DARK'})}>
                  <DarkModeOutlinedIcon className='buttonMode'/>
                </Button>
              :
                <Button onClick={()=>dispatch({type: 'LIGHT'})}>
                  <LightModeOutlinedIcon className='buttonMode'/>
                </Button>
            }
          </div>
      </nav>
    </header>
  )
}

export default Navbar

//<button onClick={handleChangeTheme} style={{background: themes.background, color:themes.font}}>Change theme</button>
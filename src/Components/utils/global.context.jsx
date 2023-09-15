import { createContext, useContext, useEffect, useState, useReducer } from "react";

const ContextGlobal = createContext();

export const useGlobalContext = () => useContext(ContextGlobal)

/*CONTEXT THEME*/
const themeReducer = (state, action) => {
  switch(action.type) {
    case "LIGHT":
      return {...state,
        theme:{
          name: action.type,
        }
      }
    case "DARK":
      return {...state,
        theme:{
          name: action.type,
        }
      }
    default:
      return state
  }
}

const ContextProvider = ({ children }) => {
  const initialTheme = {"name":"LIGHT","font":"black","background":"white"};
  /*CONTEXT THEME*/
  const initialState = {
    theme: JSON.parse(localStorage.getItem("theme")) || initialTheme
  }

  const [state, dispatch] = useReducer(themeReducer, initialState)

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.theme))
  }, [state.theme])


  /*CONTEXT FAVS*/
  const [destacados, setDestacados] = useState([])


  useEffect(() => {
  const favsData = localStorage.getItem('destacados')
    if (favsData) {
      setDestacados(JSON.parse(favsData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('destacados', JSON.stringify(destacados))
  }, [destacados])

  const addFavs = ({name, username, id}) => {
    let newDentist = {name, username, id};
    if(!isInFavs({name, username, id})) {
      setDestacados([...destacados, newDentist]);
      return;
    }
    let newFavs = destacados.filter((d)=> d.id !== id)
    setDestacados([...newFavs, newDentist])
  }

  const isInFavs = (id) => {
    return destacados.some((dentist) => dentist.id === id)
  }
  
  const deleteFavs = (id) => {
    setDestacados(destacados.filter((p)=> p.id !== id))
  }


  return (
    <ContextGlobal.Provider value={{destacados, addFavs, isInFavs, deleteFavs, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
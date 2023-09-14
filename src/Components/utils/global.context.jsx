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
          font: "black",
          background:"white"
        }
      }
    case "DARK":
      return {...state,
        theme:{
          name: action.type,
          font: "white",
          background:"black"
        }
      }
    default:
      return state
  }
}

/*export const themes = {
  light: {
    font: "black",
    background: "white"
  },
  dark: {
    font: "white",
    background: "black"
  }

}*/

const ContextProvider = ({ children }) => {
  /*CONTEXT THEME*/
  const initialState = {
    theme: localStorage.getItem("theme") || "LIGHT"
  }

  const [state, dispatch] = useReducer(themeReducer, initialState)

  useEffect(() => {
    console.log(state)
    localStorage.setItem("theme", JSON.stringify(state.theme))
  }, [state.theme])

  /*const handlerChangeTheme = () => {
    theme === themeReducer.dark ? setTheme(light) : setTheme(dark)
  }*/

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
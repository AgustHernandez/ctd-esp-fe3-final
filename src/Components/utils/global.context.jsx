import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

export const useGlobalContext = () => useContext(ContextGlobal)

export const themes = {
  light:{
      font: "black",
      background: "white"
  },
  dark: {
      font: "white",
      background:"black"
  }
};

export const ThemeContext = createContext(themes.light);

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [destacados, setDestacados] = useState([])

  useEffect(() => {
  const favsData = localStorage.getItem('destacados')
  console.log(destacados)
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
    <ContextGlobal.Provider value={{destacados, addFavs, isInFavs, deleteFavs, themes}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
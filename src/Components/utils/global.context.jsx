import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

export const useGlobalContext = () => useContext(ContextGlobal)

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const value = useMemo(() => [destacados, setDestacados], [destacados])

  useEffect(() => {
  const favsData = JSON.parse(localStorage.getItem('destacados'))
    if (favsData) {
      setDestacados(favsData)
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

  return (
    <ContextGlobal.Provider value={{destacados, addFavs}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
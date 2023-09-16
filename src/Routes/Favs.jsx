import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";


const Favs = () => {
  const { destacados } = useGlobalContext()

  console.log(destacados)
  return (
    <>
      <h1 className="titles">Dentistas Favoritos</h1>
      <div className="card-grid-favs">
        { (destacados.length !== 0) &&
            destacados.map(dentist => <Card name={dentist.name} username={dentist.username} id={dentist.id} />) 
        }
      </div>
    </>
  );
};

export default Favs;

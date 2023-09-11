import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { destacados } = useGlobalContext()

  console.log(destacados)
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        { (destacados.length !== 0) &&
            destacados.map(dentist => <Card name={dentist.name} username={dentist.username} id={dentist.id} />) 
        }
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;

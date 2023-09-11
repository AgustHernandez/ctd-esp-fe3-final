import React, { useContext, useState } from "react";
import { useGlobalContext } from './utils/global.context';


const Card = ({ name, username, id }) => {

  const [agregado, estaAgregado] = useState(false)
  const { addFavs } = useGlobalContext()


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    addFavs({name, username, id})
    //localStorage.setItem("favs" ,JSON.stringify({name, username, id}))
  }

  return (
    <div className="card">
        <a href={`detail/${id}`}> Detalle </a>
        <div>
          <h3> {name} </h3>
          <p> {username} </p>
        </div>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

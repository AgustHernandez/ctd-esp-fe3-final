import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({})
  const {id} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users/"+id)
    .then((response) => response.json())
    .then((resp) => {
      setDentist(resp)
      setLoading(false)
    })
    .catch((error)=>{
      console.error("Error al obtener información del dentista: ",error)
    });
  }, [id])

  return (
    <div>
      <h1 className='titles'>Detalle Dentista {id} </h1>
      <div className='detail'>
        {loading ? 
          (<p>Cargando...</p>) 
          :
          <div>
            <div>
              <img src="../images/doctor.jpg" alt="foto médico" className='imgDetail'/>
            </div>
            <div className='datosDetail'>
              <h2>Nombre: {dentist.name} </h2>
              <h2>Email: {dentist.email} </h2>
              <h2>Telefono: {dentist.phone} </h2>
              <h2>Sitio Web: {dentist.website} </h2>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Detail
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import '../App.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentist] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((resp) => {
      setDentist(resp)
      setLoading(false)
    })
    .catch((error)=>{
      console.error("Error al obtener información del dentista: ",error)
    });

  }, [])




  return (
    <main>
      <h1 className='tituloHome'>Home</h1>
      <div className='card-grid'>
        {loading? (<p>Cargando...</p>) : (
          dentists.map((dentist) => 
          <div>
            <Card name={dentist.name} username={dentist.username} id={dentist.id} />
          </div>)
        )}
      </div>
    </main>
  )
}

export default Home
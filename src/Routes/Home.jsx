import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import '../App.css';
import { Box, Grid } from '@mui/material';

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
    <main className="" >
      <h1 className='tituloHome'>Home</h1>
      <div className='card-grid'>
        <Box mt={2}>
          <Grid container spacing={12}>
            {loading? (<p>Cargando...</p>) : (
              dentists.map((dentist) => 
              <Grid item xs={2}>
                <Card name={dentist.name} username={dentist.username} id={dentist.id} />
              </Grid>)
            )}
          </Grid>
        </Box>
      </div>
    </main>
  )
}

export default Home
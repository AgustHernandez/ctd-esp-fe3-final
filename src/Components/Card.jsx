import React, { useContext, useState } from "react";
import { useGlobalContext } from './utils/global.context';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles'

const Cards = ({ name, username, id }) => {
  const { addFavs, isInFavs, deleteFavs} = useGlobalContext()

  const addFav = ()=>{
    addFavs({name, username, id})
  }

  const deleteFav = () => {
    deleteFavs(id)
  }

  const BotonDetalle = styled(Button) ({
    color: '#b5838d',
  })

  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
        {isInFavs(id) ?
          <BotonDetalle onClick={deleteFav}>
            Eliminar de destacados
          </BotonDetalle>
        :
          <BotonDetalle onClick={addFav}>
            Agregar a destacados
          </BotonDetalle>
        }
        <CardActionArea>
          <CardMedia component="img" height="140" image="./images/doctor.jpg" alt="foto médico"/>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {username}
            </Typography>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <Link to={`detail/${id}`}>
          <BotonDetalle>
            Ver detalle
          </BotonDetalle>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Cards;

/*{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */

        /*{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
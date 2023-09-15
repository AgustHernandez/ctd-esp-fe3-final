import { useGlobalContext } from './utils/global.context';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Cards = ({ name, username, id }) => {
  const { addFavs, isInFavs, deleteFavs} = useGlobalContext()

  const addFav = ()=>{
    addFavs({name, username, id})
  }

  const deleteFav = () => {
    deleteFavs(id)
  }

  return (
    <div className='card'>
      <div>
        {isInFavs(id) ?
          <button className='button' onClick={deleteFav}>
            <FavoriteIcon fontSize='large'/>
          </button>
        :
          <button className='button' onClick={addFav}>
            <FavoriteBorderIcon fontSize='large'/>
          </button>
        }
      </div>
      <div>
        <img src='./images/doctor.jpg' alt="foto médico" className='imgCard'/>
      </div>
      <div>
        <h2>
          {name}
        </h2>
      </div>
      <div>
        <h4>
          {username}
        </h4>
      </div>
      <div>
        <Link to={`detail/${id}`}>
          <button className='buttonDetalle'>
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;

/*{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */

        /*{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
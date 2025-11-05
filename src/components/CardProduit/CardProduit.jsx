import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ContextBoutique from '../../context/ContextBoutique.jsx';
import './CardProduit.css';

// CONTENU CARD

const style = {
  styleCard: {
    maxWidth: "100%",
    minHeight: 740,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: '10rem',
    backgroundColor: 'white',
    margin: '0 2rem 2rem 0',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.10)',
      transition: 'transform 0.3s ease',
      backgroundColor: 'white',
      // color:'black' Comment changer la couleur ?
    }

  },
  // POUR GERER LE BACKROUND IMAGE
  styleCardMedia: {
    height: 470,
    backgroundSize: 'contain',
    borderRadius: '50rem'

  },
  styleCardActionsButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: '0.5rem',
    margin: 'auto',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  },
  styleCardHover: {
    '&:hover': {
      color: 'black'
    }

  }

}

export default function MediaCard(props) {

  const contextBoutique = useContext(ContextBoutique)

  return (
    <div className='MaCard'>
      <Card sx=
        {style.styleCard}
        style={{}}

      >
        <CardMedia style={style.styleCardMedia}
          sx={{
            height: "20rem",
          }}
          image={props.costume.url}
          title="costume"
        />

        <CardContent>
          <Typography style={{color: 'black'}} gutterBottom variant="h5" component="div" sx={{ color: 'darkgrey' }} >
            {
              props.costume.name
            }
          </Typography>
          <Typography style={{color: 'black'}} variant="body2" sx={{ color: 'darkgrey' }}>
            {
              props.costume.description
            }
          </Typography>
          <Typography style={{color: 'red', fontSize: '1.8rem'}}variant="body1" sx={{ color: 'darkgrey' }}>
            {
              props.costume.price + " €"
            }
          </Typography>
          <Typography variant="body1" sx={{ color: 'darkgrey' }}>
            {
              props.costume.quantity

            } in stock

          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={style.styleCardActionsButton} disabled={props.costume.quantity === 0 ? true : false} size="small" onClick={() => {
            contextBoutique.addCard(props.costume.id);
          }}
          >Ajouter au panier</Button>
        </CardActions>
      </Card>
    </div>
  );
}

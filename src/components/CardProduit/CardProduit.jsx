import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardProduit.css';
import ContextBoutique from '../../context/ContextBoutique.jsx';

const style = {
  styleCard: { maxWidth: "100%", marginTop: ".5rem", minHeight: 740 },
  styleCardMedia: { height: 320 }
}

export default function MediaCard(props) {

  const contextBoutique = useContext(ContextBoutique)

  return (
    <div className='MaCard'>
      <Card className="MaCardCard" sx=
        {style.styleCard}
      >
        <CardMedia
          sx={{
            height: "20rem",
            backgroundSize: 'contain'
          }}
          image={props.costume.url}

          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              props.costume.name
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {
              props.costume.description
            }
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
            {
              props.costume.price + " €"
            }
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {
              props.costume.quantity 
              
            } in stock
             
          </Typography>
        </CardContent>
        <CardActions>
          <Button   disabled={props.costume.quantity === 0 ? true : false} size="small" onClick={() => {
            contextBoutique.addCard(props.costume.id);
            // console.log(contextBoutique)
            }}
            >Ajouter au panier</Button>
        </CardActions>
      </Card>
    </div>
  );
}

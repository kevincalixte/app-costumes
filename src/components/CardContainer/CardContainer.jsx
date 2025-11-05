import { PaddingRounded } from '@mui/icons-material';
import CardProduit from '../CardProduit/CardProduit.jsx';
import { backdropClasses } from '@mui/material';

// CONTAINER DES CARDS

const styles={
  styleContainer:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    padding: '5rem',
    backgroundColor: 'black',
    width: '90%',
    margin: '0 auto',
    borderRadius: '2rem'
  }
}
export default function CardContainer(props) {

  return (

    <div style={styles.styleContainer}>
    {
      props.catalogue.map((value, index) =>
        <CardProduit
          key={index}
          costume={value}
        />)

    }
    </div>

   
  );
}

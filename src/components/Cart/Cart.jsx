import React, { useContext } from 'react'
import ContextBoutique from '../../context/ContextBoutique';
import CartArticle from '../CartArticle/CartArticle';
import './Cart.css';

const style = {
  styleCard: {backgroundColor: "green"},
//   styleCardMedia: { height: 320 }
}
const Cart = () => {
    const contextBoutique = useContext(ContextBoutique);
    if (contextBoutique.cart.length) {
        return (
            <div className='cartAdd' style={style.styleCard}>
                {
                    contextBoutique.cart.map((value, index) => <CartArticle key={index} id={value} />)
                }
            </div>
        )
    } else {
        return (
            <div className='cartEmpty'>
                Aucun article dans votre Panier.
            </div>
        )
    }
}

export default Cart
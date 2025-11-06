import React, { useContext } from 'react'
import ContextBoutique from '../../context/ContextBoutique';
import CartArticle from '../CartArticle/CartArticle';

const styles = {
    styleCart: {
        width: '90%',
        margin: '2rem auto',
        backgroundColor: 'white',
    },
    styleCartEmpty:{
        textAlign: 'center',
        width: '50vw',
        margin: '2rem auto',
        color: 'darkgrey'
    }
}
const Cart = () => {
    const contextBoutique = useContext(ContextBoutique);
    if (contextBoutique.cart.length) {
        return (
            <div style={styles.styleCart}>
                {
                    contextBoutique.cart.map((value, index) => <CartArticle key={index} item={value} />)
                }
            </div>
        )
    } else {
        return (
            <div style={styles.styleCartEmpty}>
               Panier vide
            </div>
        )
    }
}

export default Cart
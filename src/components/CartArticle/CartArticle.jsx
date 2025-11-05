import React, { useContext } from 'react'
import ContextBoutique from '../../context/ContextBoutique'

const styles = {
  articles: { 
    margin: '1.5rem auto', 
    padding: '1.5rem', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '90vw', 
    borderRadius: '1rem',
    backgroundColor: 'white',
    border: '1px solid transparent',
    fontSize: '1.1rem',
  }
}

function CartArticle(props) {
  const contextBoutique = useContext(ContextBoutique);
  const values = contextBoutique.catalogue[props.item.id];
  return (
    <div style={styles.articles}>
      <div style={{ maxWidth: 35 }}><img src={values.url} /></div>
      <div>{values.name}</div>
      <div>{values.price}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: 100 }}>
        <div>-</div>
        <div>{props.item.quantity}</div>
        <div onClick={() => contextBoutique.addCart(props.item.id)}>+</div>
      </div>
      <div>Total : {"??"}</div>
    </div>
  )
}

export default CartArticle
import * as React from 'react';
// import catalogue from "../../assets/js/lib/catalogue.service.js";
import CardProduit from '../CardProduit/CardProduit.jsx';
import './CardContainer.css';
import CartArticle from '../CartArticle/CartArticle.jsx';

export default function SimpleContainer(props) {

  // console.log(props)
  return (

    <div className='MonContainer'>
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

import { useState } from "react";
import MenuBoutique from "./components/MenuBoutique/MenuBoutique";
import CardContainer from "./components/CardContainer/CardContainer.jsx";
import articles from "./services/catalogue.service.js";
import ContextBoutique from "./context/ContextBoutique.jsx";
import Cart from "./components/Cart/Cart.jsx";
import "./App.css";

function App() {

  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] = useState([])

  const addCard = (id) => {
    if (catalogue[id].quantity > 0) {

      const catalogueTmp = catalogue.map((value, index) => {

        if (index === id) {
          value.quantity--;
        }
        return value;
      })

      setCatalogue(catalogueTmp);

      let cartTmp;
      if (cart.length > 0) {
        let gotIt = false;
        cartTmp = cart.map((value, index) => {
          if (value.id === id) {
            value.quantity++;
            gotIt = true
          }
          return value;
        })
        if (!gotIt) cartTmp.push({ id: id, quantity: 1 })
      } else {
        cartTmp = [{ id: id, quantity: 1 }]
      }
      cartTmp.sort()
      setCart(cartTmp);
    }

  }

  const removeCard = (id) => {
    // console.log("id remove : ", id)
    // add qte
    const catalogueTmp = catalogue.map((value, index) => {
      if (index === id) {
        value.quantity++;
      }
      return value;
    })
    setCatalogue(catalogueTmp);
    // remove from cart
    // je crée un indice deleteIndex pour supprimer du tableau cartTmp l'entrée§µ
    // dont la qte === 1
    let deleteIndex = undefined;
    // je copie mon tableau cart dans un nouveau
    const cartTmp = cart.map((value, index) => {
      // si l'entrée a supprimer existe dans mon tableau
      if (value.id === id) {
        // si sa qte est superieur à 1
        if (value.quantity > 1) {
          // je la decremente
          value.quantity--
        } else { // si elle est au moins egale a 1
          // je l'ajoute a mon deleteIndex en vue de la supprimer 
          // de cartTmp à la fin de ma boucle
          deleteIndex = index;
        }
      }
      return value;
    })
    // fin de boucle et suppression d'une entrée egale à 1 si elle existe
    if (deleteIndex !== undefined) {
      cartTmp.splice(deleteIndex, 1)
    }
    // set de mon tableau modifier dans cart
    setCart(cartTmp);
  }


  // const removeCard = (id) => {


  //   const catalogueTmp = catalogue.map((value, index) => {

  //     if (index === id) {
  //       value.quantity++;
  //     }
  //     return value;
  //   })

  //   setCatalogue(catalogueTmp);

  //   let deleteIndex = undefined;
  //   const cartTmp = cart.map((value, index) => {
  //     if (value.id === id) {
  //       if (value.quantity === 1) {
  //         if (value.quantity > 1) {
  //           value.quantity--;
  //         } else {
  //           deleteIndex = index;
  //         }

  //       }
  //       return value;
  //     }
  //   })

  //   if (deleteIndex !== undefined) {
  //     cartTmp.splice(deleteIndex, 1);

  //   }
  //   setCart(cartTmp);




  // if (catalogue[id].quantity > 0) {

  //   const catalogueTmp = catalogue.map((value, index) => {

  //     if (index === id) {
  //       value.quantity++;
  //     }
  //     return value;
  //   })

  //   setCatalogue(catalogueTmp);

  //   let cartTmp;
  //   if (cart.length > 0) {
  //     let gotIt = false;
  //     cartTmp = cart.map((value, index) => {
  //       if (value.id === id) {
  //         value.quantity--;
  //         gotIt = true
  //       }
  //       return value;
  //     })
  //     if (!gotIt) cartTmp.push({ id: id, quantity: 1 })
  //   } else {
  //     cartTmp = [{ id: id, quantity: 1 }]
  //   }
  //   cartTmp.sort()
  //   setCart(cartTmp);
  // }

  // }

  const removeAll = (id) => {

    // let trouve = catalogue.find((value) => value.id === id)
    let indexDeleteCart = cart.findIndex((value) => value.id === id)
    // console.log("trouve : " + trouve.id, trouve.quantity)
    // console.log("indexDelete : " + indexDeleteCart, id)
    // traitement catalogue
    let quantityTmp = cart[indexDeleteCart].quantity
    const catalogueTmp = catalogue.map((value, index) => {
      if (value.id === id) {
        value.quantity += quantityTmp
      }
      return value;
    })
    // catalogueTmp[id].quantity += quantityTmp
    setCatalogue(catalogueTmp)
    // traitement cart
    // const cartTmp = cart.map(value=>value) // RACCOURCI DE LA LIGNE EN BAS
    const cartTmp = cart.map((value) => {

      return value
    })
    cartTmp.splice(indexDeleteCart, 1)
    setCart(cartTmp)






    // console.log('AVANT : ' + cartTmp.length)
    // cartTmp.splice(id, cartTmp.length)
    // console.log('APRES : ' + cartTmp.length)


    // console.log("id remove all : ", id)
    // // add qte
    // const catalogueTmp = catalogue.map((value, index) => {
    //   if (index === id) {
    //     // value.quantity = 0
    //   }
    //   return value;
    // })
    // setCatalogue(catalogueTmp);

    // let deleteIndex = undefined;

    // const cartTmp = cart.map((value, index) => {

    //   deleteIndex = index;

    //   return value;
    // })

    // if (deleteIndex !== undefined) {
    //   cartTmp.splice(deleteIndex, 1)
    // }

    // setCart(cartTmp);
  }

  return (

    <ContextBoutique.Provider value={{ catalogue, cart, addCard: addCard, removeCard: removeCard, removeAll: removeAll }}>
      <header>
        <MenuBoutique>

        </MenuBoutique>
      </header>

      <main>
        <Cart></Cart>
        <CardContainer catalogue={catalogue}></CardContainer>

      </main>

      <footer>

      </footer>
    </ContextBoutique.Provider>
  );
}

export default App;
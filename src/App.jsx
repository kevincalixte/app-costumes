import { useState } from "react";
import "./App.css";
import MenuBoutique from "./components/MenuBoutique/MenuBoutique";
import CardContainer from "./components/CardContainer/CardContainer.jsx";
import articles from "./services/catalogue.service.js";
import ContextBoutique from "./context/ContextBoutique.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

  const [catalogue, setCatalogue] = useState(articles);
  const [cart, setCart] = useState([])

  const addCard = (id) => {
    // console.log('addCard : ' + id);
    // console.log(catalogue[id].quantity)
    if (catalogue[id].quantity > 0) {

      const catalogueTmp = catalogue.map((value, index) => {
        // console.log("value : " + value.quantity)
        if (index === id) {
          value.quantity--;
          // console.log("VALUE.QUANTITY : " + value.quantity)

        }
        return value;
      })
      // console.log("tmp : " + catalogueTmp[id])
      setCatalogue(catalogueTmp);
      const cartTmp = cart.map((value, index) => {
        if (value.id === id) {
          value.quantity++;
          return value;
        } else {
          cartTmp.push(id)
        }
      })

      // cartTmp.push(id);
      cartTmp.sort()
      setCart(cartTmp)
    }
  }

  return (
    <ContextBoutique.Provider value={{ catalogue, cart, addCard: addCard }}>
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











// const [count, setCount] = useState(0);

// catalogue.map((element) => {
//   const produit = catalogue[element];

//   {<CardProduit></CardProduit>}
//   console.log(produit)
// });

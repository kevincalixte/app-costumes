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
            value.qte++;
            gotIt = true
          }
          return value;
        })
        if (!gotIt) cartTmp.push({ id: id, qte: 1 })
      } else {
        cartTmp = [{ id: id, qte: 1 }]
      }
      cartTmp.sort()
      setCart(cartTmp);
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
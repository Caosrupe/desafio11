import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './components/CartContext';

function App() {
  return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/categories/:categoryid">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/categories">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/item/:itemid">
                            <ItemDetailContainer/>
                        </Route>
                        <Route path="/Cart">
                            <Cart/>
                        </Route>
                    </Switch>     
            </BrowserRouter>
            <Footer />
        </CartProvider>
    );
}



export default App;

import './App.css';
import Home from "./Home";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import {useEffect,useState} from 'react';
import Bedroom from "./Bedroom";
import Purifiers from "./Purifiers";
import LivingRoom from './LivingRoom';
import Vehicles from './Vehicles';
import Airconditioner from './Airconditioner';
import KitchenAppliances from './KitchenAppliances';
import WashingMachine from './WashingMachine';
import Menu from './Menu';
import SingleProduct from './SingleProduct';
import Cart from './Components/Cart';


function App() {

  const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);


  const addToCart = (e) => {
    e.preventDefault();
    let flag = 0;

    console.log(e.target.amount['value']);
    if(cart.length <= 0) {
        let cartData = {
            id : e.target.add['value'],
            name: e.target.w3ls_item['value'],
            amount : parseInt(e.target.amount['value']),
            noOfProduct : 1
        }
        cart.push(cartData)
        setCart(cart);
        
    }else {

      cart.forEach((array,index) => {
            if(array.id === e.target.add['value'] && flag === 0) {
                flag = 1;
                array.amount += array.amount;
                array.noOfProduct += 1;
                array.id = array.id;
                array.name = array.name;
                cart[index] = array;
            }
      })

      if(flag === 0 ) {
        let cartData = {
            id : e.target.add['value'],
            name: e.target.w3ls_item['value'],
            amount : parseInt(e.target.amount['value']),
            noOfProduct : 1
        }
        cart.push(cartData)
        
      }
      setCart(cart);
    }
   localStorage.setItem("cart",JSON.stringify(cart));
   toast.success("Item added to cart", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
   
}

  const [isLoggedIn,setIsLoggedIn]= useState('')
  useEffect(() => {
    
    let cookie = new Cookies();
    let cookieValue = cookie.get('usr1236emmffjsv');
    if(cookieValue != null){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
    
  }, [])


  
  return (

    
    
    <Router>
        
        <Switch>

            <Route exact path = "/">
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} />


            </Route>

            


            <Route exact path = "/bedroom/:id">
            <Bedroom  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  cart= {cart} setCart = {setCart} addToCart = {addToCart} />
            </Route>

            <Route exact path= "/purifiers/:id">
              <Purifiers isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>

            </Route>

            <Route exact path= "/livingroom/:id">
              <LivingRoom isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>

            </Route>

            <Route exact path="/vehicles/:id">
              <Vehicles isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>

            </Route>

            <Route exact path= "/airconditioner/:id">
              <Airconditioner isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>

            </Route>

            <Route exact path= "/kitchenappliances/:id">
              <KitchenAppliances isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart} />

            </Route>

            <Route exact path= "/washingmachine/:id">
              <WashingMachine isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>

            </Route>

            <Route exact path="/singleproduct">
              <SingleProduct isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>


            </Route>

            <Route exact path="/cart">
              <Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart= {cart} setCart = {setCart} addToCart = {addToCart}/>


            </Route>


        </Switch>

        

   
        

        <Footer></Footer>
        <ToastContainer />
    </Router>
  );
}

export default App;

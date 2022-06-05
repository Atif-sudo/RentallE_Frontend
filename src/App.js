
import './App.css';
import Home from "./Home";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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


function App() {
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
            <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />


            </Route>

            


            <Route exact path = "/bedroom/:id">
            <Bedroom />
            </Route>

            <Route exact path= "/purifiers/:id">
              <Purifiers/>

            </Route>

            <Route exact path= "/livingroom/:id">
              <LivingRoom/>

            </Route>

            <Route exact path="/vehicles/:id">
              <Vehicles/>

            </Route>

            <Route exact path= "/airconditioner/:id">
              <Airconditioner/>

            </Route>

            <Route exact path= "/kitchenappliances/:id">
              <KitchenAppliances/>

            </Route>

            <Route exact path= "/washingmachine/:id">
              <WashingMachine/>

            </Route>

            <Route exact path="/singleproduct">
              <SingleProduct/>


            </Route>


        </Switch>

        

   
        

        <Footer></Footer>
        <ToastContainer />
    </Router>
  );
}

export default App;

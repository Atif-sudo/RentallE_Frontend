import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Menu from './Menu'
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import { Link } from 'react-router-dom'

const Airconditioner = ({isLoggedIn,setIsLoggedIn, cart ,setCart, addToCart}) => {


    const [sign_in_up_model,setsignin_up_model]= useState('')
    const cookies = new Cookies();

    function loginButtonClickHandle(){
        
        if(isLoggedIn){
            document.getElementById('profileModal').style.display='block';
        }else{
            setsignin_up_model('sign-in');
        }
    }
   

    const handleLogin = (e) => {

        e.preventDefault();

        let username = e.target.Email.value;
        let password = e.target.Password.value;

        let userdata={
            Email: username,
            Password:password
        }

        
            axios.post(`http://127.0.0.1:8080/Rentalle/v1/authentication/login`,userdata)
              .then(res => {
                console.log(res.data)
                cookies.set('usr1236emmffjsv', res.data.data, { path: '/'},);
                console.log(cookies.get('myCat'));
                document.querySelector('#myModal88 .close').click();
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setIsLoggedIn(true);
              }).catch((err)=>{
                console.log(err.data);
                toast.error(err.response.data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    dark:true,
                    progress: undefined,
                    theme:"light",
                    });
              })       


    }   
    const handlesignUp = (event)=>{
        event.preventDefault();

        let username = event.target.Email.value;
        let password = event.target.Password.value;
        let name= event.target.FullName.value;
        let mobileNo =event.target.MobileNo.value;
        let Adrress =event.target.Address.value;
        let ProofID =event.target.ProofID.value;
        let Customer= event.target.customertype.value == 1? true : false;
        let Seller = event.target.customertype.value == 2? true : false;


        let regData={

            Email: username,
            Password :password,
            FullName : name,
            MobileNo : mobileNo,
            Address: Adrress,
            ProofID : ProofID,
            is_customer : Customer,
            is_seller : Seller
        }

        



        axios.post(`http://127.0.0.1:8080/Rentalle/v1/authentication/signUp`,regData)
            .then(res => {
              console.log(res.data)
            //   const cookies = new Cookies();
            //   cookies.set('usr1236emmffjsv', res.data.data, { path: '/'},);
            //   console.log(cookies.get('myCat'));
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            }).catch((err)=>{
              console.log(err.response.data.error);
              toast.error(err.response.data.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                dark:true,
                progress: undefined,
                theme:"light",
                });
            })
            
    }


    const delayLogout = () => {
        window.location.reload();
    }

    const logOut = (e) =>{
        cookies.remove('usr1236emmffjsv');
        toast.success("logout successfull", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setIsLoggedIn(false);
        const myTimeout = setTimeout(delayLogout, 3100);
    }


  return (
   

    <div>
        <div className="container">
                    <div className="w3l_login">
                      <a href="#" onClick={loginButtonClickHandle} data-toggle="modal" data-target="myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
                    </div>

                    <div className="w3l_logo">
                        <h1><Link to="/">RentallE <span>Your Stores. Your Place.</span></Link></h1>
                    </div>

                    <div className="search">
                        <input className="search_box" type="checkbox" id="search_box"/>
                        <label className="indexContainer" for="search_box"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> </label>
                        <div className="search_form">
                            <form action="#" method="post">
                                <input type="text" name="search" placeholder="Search..."/>
                                <input type="submit" value="Send"/>
                            </form>
                        </div>
                    </div>

                    <div className="cart cart box_1">
                        <div action="/cart" method="post" className="last">
                            <input type="hidden" name="cmd" value="last"/>
                            <input type="hidden" name="display" value="1"/>
                            <button className="w3view-cart" type="submit" name="submit" value=""><Link to = '/cart'> <i className="fa fa-cart-arrow-down" aria-hidden="true"></i></Link></button>
                        </div>
                    </div>


                </div>
      <Menu/>

      <div className="banner-bottom">
                <div className="container">

                    <div className="col-md-12 wthree_banner_bottom_right">
                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">VOLTAS</a></li>
                                <li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">WHIRLPOOL</a> </li>
                                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">LG</a> </li>
                                <li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">HITACHI</a> </li> 
                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <img src="https://pdimg.pricedekho.com/5/13064/0/home.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Voltas 183V CZJ 1.5 Ton 3 Star Inverter Split AC</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4580</span><i className="item price">₹3550/mon</i> </p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart"/>
                                                 <input type="hidden" name="add" value="1"/>
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
                                                 <input type="hidden" name="amount" value="350.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 183 DZZ 1.5 Ton 3 Star Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3390</span> <i className="item_price">₹3102/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone2" />
                                                 <input type="hidden" name="amount" value="302.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13065/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 183 DZZ 1.5 Ton 3 Star Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3250</span> <i className="item_price">₹2945/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13067/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 183 DZA 1.5 Ton 3 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2150</span> <i className="item_price">₹1645/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13076/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 153V DZV 1.2 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2350</span> <i className="item_price">₹1849/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13086/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas WAC 183 GZP 1.5 Ton 3 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2150</span> <i className="item_price">₹1649/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13115/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 185V JZJT 1.5 Ton 5 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2550</span> <i className="item_price">₹1999/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13128/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 185V SZS 1.5 Ton 5 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2290</span> <i className="item_price">₹1599/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13160/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Voltas 183V CZS 1.5 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1290</span> <i className="item_price">₹1099/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="245.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="clearfix"> </div>
                                 </div>
                             </div>
                             <div role="tabpanel" className="tab-pane fade" id="audio" aria-labelledby="audio-tab">
                                 <div className="agile_ecommerce_tabs">
                                    
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-magicool-small-61977-1584805285.jpeg?downsize=200:*" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (MAGICOOL)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8000</span> <i className="item_price">₹6550/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Headphones" />
                                                 <input type="hidden" name="amount" value="150.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-magicool-elite-pro-large-100742-170552-1617786294-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (MAGICOOL ELITE PRO) Price in India</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5220</span> <i className="item_price">₹4180/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-3-star-inverter-split-ac-nitrocool-3s-large-101006-170769-1617786284-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (NITROCOOL 3S) Price in India</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5280</span> <i className="item_price">₹3880/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-purafresh-pro-large-100745-170555-1615986383-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (3D COOL PURAFRESH PRO) Price in India</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4280</span> <i className="item_price">₹3880/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-supreme-cool-pro-large-100749-170559-1615986420-1.jpg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (SUPREME COOL PRO)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4269</span> <i className="item_price">₹3580/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109420-1-800x252-1653977945.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Split AC (SAR18B39MC0)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4219</span> <i className="item_price">₹3560/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/1-5-ton-inverter-split-ac-3d-cool-elite-pro-large-94120-163288-1591690507-1.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1.5 Ton 3 Star Inverter Split AC (3D Cool Elite Pro)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5219</span> <i className="item_price">₹4560/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109418-1-800x237-1653976529.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool Whirlpool 1.5 Ton 3 Star Inverter Split AC (SAI18B31M0D)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4216</span> <i className="item_price">₹3960/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <img src="https://i.gadgets360cdn.com/products/large/109423-1-800x247-1653979398.jpeg?downsize=*:180" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 1 Ton 3 Star Split AC (SAR12B39MC0)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4116</span> <i className="item_price">₹3990/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Audio Player" />
                                                 <input type="hidden" name="amount" value="180.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="clearfix"> </div>
                                 </div>
                             </div>
                             <div role="tabpanel" className="tab-pane fade" id="video" aria-labelledby="video-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13037/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG LS-Q18YNZA 1.5 Ton 5 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3880</span> <i className="item_price">₹3450/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Laptop" />
                                                 <input type="hidden" name="amount" value="850.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13063/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG KS-Q18ENZA 1.5 Ton Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4290</span> <i className="item_price">₹3280/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Notebook" />
                                                 <input type="hidden" name="amount" value="280.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13068/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG LS-Q18JNXA 1.5 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4120</span> <i className="item_price">₹3980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG LS-Q12CNXD 1 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5120</span> <i className="item_price">₹980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13069/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG LS-Q12CNXD 1 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3120</span> <i className="item_price">₹2980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13087/4/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG LS-Q18HNYA 1.5 Ton 4 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5120</span> <i className="item_price">₹3980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13107/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG JW-Q18WUZA 1.5 Ton 5 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5120</span> <i className="item_price">₹4980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13114/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG JW-Q18WUXA 1.5 Ton 3 Star Inverter Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3120</span> <i className="item_price">₹2980/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Kid's Toy" />
                                                 <input type="hidden" name="amount" value="80.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="clearfix"> </div>
                                 </div>
                             </div>
                             <div role="tabpanel" className="tab-pane fade" id="tv" aria-labelledby="tv-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13158/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi RSNG317HCEA 1.5 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1950</span> <i className="item_price">₹1520/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Refrigerator" />
                                                 <input type="hidden" name="amount" value="820.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13035/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi RSN317HCEA 1.5 Ton 3 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2700</span> <i className="item_price">₹2680/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="LED Tv"/>
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13078/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi Merai 3100X RSD318HBEA 1.5 Ton 3 Star Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4520</span> <i className="item_price">₹3210/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13108/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi Kaze Plus RAW318KUD 1.5 Ton 3 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2520</span> <i className="item_price">₹2210/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13112/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi Kaze Plus RAW511KUD 1 Ton 5 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2320</span> <i className="item_price">₹2110/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13167/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi RAW518KUDZ1 1.5 Ton 5 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2560</span> <i className="item_price">₹2433/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13168/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi RAW312KWD 1 Ton 3 Star Window AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2500</span> <i className="item_price">₹2233/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13184/1/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi Kashikoi 5100X RSOG518HDEA 1.5 Ton 5 Star Inverter Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3100</span> <i className="item_price">₹2993/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/5/13203/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Hitachi RSNS318HCDO 1.5 Ton 3 Star Split AC</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2755</span> <i className="item_price">₹2193/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                    

                                     <div className="clearfix"> </div>
                                 </div>
                             </div>
                             <div role="tabpanel" className="tab-pane fade" id="kitchen" aria-labelledby="kitchen-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Grinder</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹460</span> <i className="item_price">₹450</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Grinder" />
                                                 <input type="hidden" name="amount" value="450.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹390</span> <i className="item_price">₹350</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Water Purifier" />
                                                 <input type="hidden" name="amount" value="350.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Coffee Maker</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹250</span> <i className="item_price">₹220</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Coffee Maker" />
                                                 <input type="hidden" name="amount" value="220.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="clearfix"> </div>


                                 </div>
                             </div>
                             { !isLoggedIn ?
            <div className={"modal  " +sign_in_up_model} id="myModal88" tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={()=>setsignin_up_model('')} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">
                                {(sign_in_up_model == 'sign-in')?"SignIn":"Register"}
                            </h4>
                        </div>
                        <div className="modal-body modal-body-sub">
                            <div className="row">
                                <div className="col-md-8 modal_body_left modal_body_left1">
                                    <div className="sap_tabs">
                                        <div id="horizontalTab">
                                            <ul>
                                                <li onClick={()=>setsignin_up_model('sign-in')} className="resp-tab-item" aria-controls="tab-item-0"><span>Sign in</span></li>
                                                <li onClick={()=>setsignin_up_model('sign-up')} className="resp-tab-item" aria-controls="tab-item-1"><span>Sign up</span></li>
                                            </ul>
                                            <div className="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                                <div className="facts">
                                                    <div className="register">
                                                        <form action="#" method="post" onSubmit={ (e) =>{ handleLogin(e) }}>
                                                            <input name="Email" placeholder="Email Address" type="text" required=""/>
                                                            <input name="Password" placeholder="Password" type="password" required=""/>
                                                            <div className="sign-up"> <br/>
                                                                <input type="submit" value="Sign in"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2 resp-tab-content" aria-labelledby="tab_item-1">
                                                <div className="facts">
                                                    <div className="register">

                                                        <form action="#" method="post" onSubmit={(event) =>{handlesignUp(event)}}>
                                                            <input placeholder="Email Address" name="Email" type="text" required=""/>
                                                            <input placeholder="Password" name="Password" type="password" required=""/>
                                                            <input placeholder="Full Name" name="FullName" type="text" required=""/>
                                                            <input  placeholder="Mobile Number" type="text" name="MobileNo" pattern="[7-9]{1}[0-9]{9}" required=""/>
                                                            <input placeholder="Adrress" name="Address" type="text" required=""/>
                                                            <input placeholder="ProofID" name="ProofID" type="text" required=""/>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio"
                                                                       id="inlineCheckbox1" name="customertype" value="1" checked/>
                                                                    <label className="form-check-label"
                                                                           htmlFor="inlineCheckbox1">Customer </label>


                                                                <input className="form-check-input" type="radio"
                                                                       id="inlineCheckbox2" name="customertype" value="2"/>
                                                                <label className="form-check-label"
                                                                       htmlFor="inlineCheckbox2">Seller</label>
                                                                <div id="message"></div>

                                                               
                                                            </div>



                                                            <div className="sign-up"> <br/>
                                                                <input type="submit" value="Create Account"/>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="OR" className="hidden-xs">OR</div>
                                    </div>
                            <div className="col-md-4 modal_body_right modal_body_right1">
                                <div className="row text-center sign-with">
                                    <div className="col-md-12">
                                        <ul className="social">
                                            <li className="social_facebook"><a href=""className="entypo-facebook"></a> </li>
                                            <li className="social_dribbble"><a href=""className="entypo-dribbble"></a> </li>
                                            <li className="social_twitter"><a href=""className="entypo-twitter"></a> </li>
                                            <li className="social_behance"><a href=""className="entypo-behance"></a> </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            :
            

            <div className="modal" id="profileModal" tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                        <div className="modal-header">
                        <button type="button" class="btn btn-danger mt-2" onClick={(e)=>(logOut(e))}>Logout</button>
                            <button type="button" onClick={()=>document.getElementById('profileModal').style.display='none'} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">
                                Profile Details
                                {console.log(cookies.get('usr1236emmffjsv').ID)}
                            </h4>
                        </div>
                        <div className="modal-body modal-body-sub">
                            <div className="row">
                               
                                <div className="col-md-4" >
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">
                                    {cookies.get('usr1236emmffjsv').FullName}</div>
                                </div>
                                
                                <div className="col-md-4" >
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">{cookies.get('usr1236emmffjsv').Email}</div>
                                </div>
                                
                                <div className="col-md-4">
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">{cookies.get('usr1236emmffjsv').MobileNo}</div>
                                </div>               
                            
                            </div>

                            {
                                cookies.get('usr1236emmffjsv').is_customer ? <CustomerProfile Id = {cookies.get('usr1236emmffjsv').ID} /> : <SellerProfile Id = {cookies.get('usr1236emmffjsv').ID} />
                            }

                        </div>
                    </div>
                </div>
            </div>
            }
                         </div>
                     </div>
                 </div>

             </div>
         </div>
    </div>
  )
}

export default Airconditioner
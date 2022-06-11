
import Menu from './Menu'
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

const KitchenAppliances = ({isLoggedIn,setIsLoggedIn, cart ,setCart, addToCart}) => {

    const [sign_in_up_model,setsignin_up_model]= useState('')
    const cookies = new Cookies();

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

    function loginButtonClickHandle(){
        
        if(isLoggedIn){
            document.getElementById('profileModal').style.display='block';
        }else{
            setsignin_up_model('sign-in');
        }
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
      <Menu></Menu>
      {/* <AuthModule isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} /> */}
      <div className="banner-bottom">
                <div className="container">

                    <div className="col-md-12 wthree_banner_bottom_right">
                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">MICROWAVES</a></li>
                                <li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">REFRIGERATOR</a> </li>
                                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">MIXER JUICER GRINDER</a> </li>
                                <li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">OVEN TOASTER GRILLS</a> </li>
                                                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Samsung 23 L Solo Microwave Oven (MS23A301TAK/TL, Black, Auto Cook)</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1080</span><i className="item price">₹550/mon</i> </p>
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
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610VIYpm+FL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung 23 L Solo Microwave Oven (MS23J5133AG/TL, Black)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1350</span> <i className="item_price">₹842/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61pDIEAuU1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bajaj 1701 MT 17L Solo Microwave Oven, White</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹950</span> <i className="item_price">₹845/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Odjpsi1NL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Panasonic 20L Solo Microwave Oven (NN-ST26JMFDG, Silver, 51 Auto Menus)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹860</span> <i className="item_price">₹599/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81Fi-Kl1jEL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Panasonic 20 L Solo Microwave Oven (NN-SM25JBFDG,Black)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹699</span> <i className="item_price">₹359/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/611wMY1y93L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG 20 L Solo Microwave Oven (MS2043DB, Black)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹399</span> <i className="item_price">₹259/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558143-247-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung RR21T2H2XCR 198 L 4 Star Inverter Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2320</span> <i className="item_price">₹1350/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558162-210-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung RR21T2H2WCU 198 L 5 Star Inverter Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2220</span> <i className="item_price">₹800/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558148-141-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool WDE 205 CLS 2S 190 L 2 Star Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2020</span> <i className="item_price">₹860/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/582800-100-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG GL-D201ABPY 190 L 4 Star Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2000</span> <i className="item_price">₹560/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558487-164-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Haier HED-20FDS 195 L 4 Star Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹920</span> <i className="item_price">₹569/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/558812-196-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool WDE 205 Roy 3S 190 L 3 Star Direct Cool Single Door Refrigerator</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1520</span> <i className="item_price">₹1069/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61C4EzIyQmL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Nutri-Blend Complete Kitchen Machine, 22000 RPM Mixer-Grinder, Blender, Chopper, Juicer, SS Blades, 4 Unbreakable Jars, 2 Years Warranty, 400 W-Champagne, Online Recipe Book by Chef Sanjeev Kapoor</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1880</span> <i className="item_price">₹850/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/81+M1QrVNIL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar (White and Blue)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹960</span> <i className="item_price">₹469/mon</i></p>
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
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src=" https://m.media-amazon.com/images/I/51iNZ4KfXzL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Philips Juicer Mixer Grinder - HL7576 (Blue_Free Size)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹520</span> <i className="item_price">₹290/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61km34kPOOL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Sujata Powermatic Plus, Juicer Mixer Grinder with Chutney Jar, 900 Watts, 3 Jars (White)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1520</span> <i className="item_price">₹1190/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/618O0ywM1SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Philips HD6975/00 25 Litre Digital Oven Toaster Grill, Grey, 25 liter</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹950</span> <i className="item_price">₹520/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Kpz-HFmyL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">AGARO Marvel 48 Liters Oven Toaster Griller, Motorised Rotisserie and Convection Cake Baking OTG with 3 Heating Mode , (Black)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹700</span> <i className="item_price">₹580/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614cZL1O0SL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Borosil Prima 48 L Oven Toaster & Grill, Motorised Rotisserie & Convection Heating, 6 Heating Modes, Silver</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1220</span> <i className="item_price">₹710/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61YNUBs52QL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Croma Oven Toaster Grill 48L OTG with Convection mode, Temperature Control, 60 mins timer, Motorized Rotisserie, Multiple Heating Modes (2000W, CRAO0063, Black)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1020</span> <i className="item_price">₹299/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61BXm989VZL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">AGARO ROYAL 49 Litres Oven Toaster Griller (OTG), Motorised Rotisserie, Convection, 5 Heating Functions, 2000W, Suitable for Cake Baking, Black, 49L (33540)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹520</span> <i className="item_price">₹200/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/614jzQFw61L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Philips HD6976/00 36-liters Digital Oven Toaster Grill, 2000W, with Opti Temp Technology, Temperature control, Convection Mode, 7-level browning function & preset Indian Menus</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹520</span> <i className="item_price">₹290/mon</i></p>
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

export default KitchenAppliances
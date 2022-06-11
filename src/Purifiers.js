import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

import Menu from './Menu'

const Purifiers = ({isLoggedIn,setIsLoggedIn,cart ,setCart, addToCart}) => {

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
      <Menu/>

      <div className="banner-bottom">
                <div className="container">

                    <div className="col-md-12 wthree_banner_bottom_right">
                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">KENT</a></li>
                                <li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">PUREIT</a> </li>
                                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">LIVPURE</a> </li>
                                <li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">AQUAGUARD</a> </li>
                                <li role="presentation"><a href="#kitchen" role="tab" id="kitchen-tab" data-toggle="tab" aria-controls="kitchen">TATA</a> </li>
                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25853-65-1.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Kent Pride RO+UF with TDS Controller 8L Water Purifier</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3080</span><i className="item price">₹2550/mon</i> </p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/228558-85-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Kent Ace Plus RO 7 liters Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3350</span> <i className="item_price">₹3042/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25837-50-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Kent Pearl 8-Litre Mineral RO+UV Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3250</span> <i className="item_price">₹2845/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/198753-95-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Kent Prime 9L RO+UV+UF With TDS Controller Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3360</span> <i className="item_price">₹3099/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/25860-39-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Kent Wonder 7L RO UF with TDS Controller Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3699</span> <i className="item_price">₹3159/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-330,c-at_max/194463-64-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Kent Prime TC 9 Litres RO Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3299</span> <i className="item_price">₹2859/mon</i></p>
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

                             {/*Pureit*/}
                             <div role="tabpanel" className="tab-pane fade" id="audio" aria-labelledby="audio-tab">
                                 <div className="agile_ecommerce_tabs">
                                     
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/84/2465884/10333907-hul-pureit-8l-ro-uv-ultima-oxytube-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Pureit Autofill 23 L Programmed Germ Kill Technology Water Purifier</a></h5>
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
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/6/6/1445206/3398235-pureit-autofill-23-l-programmed-germ-kill-technology-water-purifier-picture-home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Pureit Autofill 23 L Programmed Germ Kill Technology Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2220</span> <i className="item_price">₹1800/mon</i></p>
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
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/5/85/2465885/10333910-hul-pureit-23l-marvella-uv-cold-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">HUL Pureit 2.3L Marvella UV + Cold Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2020</span> <i className="item_price">₹1860/mon</i></p>
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
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/87/2465887/10333914-hul-pureit-5l-ro-marvella-slim-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">HUL Pureit 5L RO Marvella Slim Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2020</span> <i className="item_price">₹1560/mon</i></p>
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
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image1.pricedekho.com/p/137/4/34/2333434/9569276-pureit-ultima-8l-ro-uv-water-purifier-black-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Pureit Ultima 8L RO + UV Water Purifier Black</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2120</span> <i className="item_price">₹1569/mon</i></p>
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
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/7/77/1445177/3398179-pureit-advanced-23-l-programmed-germ-kill-technology-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Pureit Advanced 23 L Programmed Germ Kill Technology Water Purifier</a></h5>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/304815-22-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Pep Pro Plus 7 Litres RO UV UF Water Purifier</a></h5>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/540349-63-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Pep Pro Plus 7 L RO UV Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1290</span> <i className="item_price">₹969/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49445-72-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Touch Plus RO+UV+UF 7.5L Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1320</span> <i className="item_price">₹890/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/221568-50-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Pep Star 7 Litre RO+UV+UF Water Purifier</a></h5>
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
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/348511-8-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Envy Plus 15L RO UV UF Water Purifier (With Pre Filter)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1460</span> <i className="item_price">₹1020/mon</i></p>
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
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/49444-33-1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Livpure Touch UV+RO 8.5L Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1560</span> <i className="item_price">₹929/mon</i></p>
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
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image2.pricedekho.com/p/137/0/80/1041780/2127793-aquaguard-classic-ultra-violet-uv-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Classic Ultra Violet (UV) Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹950</span> <i className="item_price">₹820/mon</i></p>
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
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://image3.pricedekho.com/p/137/4/74/1041774/2127784-aquaguard-reviva-8-l-reverse-osmosis-ro-water-purifier-picture-big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Reviva 8 L Reverse Osmosis (RO) Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹700</span> <i className="item_price">₹680/mon</i></p>
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
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/0/001-new.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Ritz RO+UV+MTDS+SS Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1220</span> <i className="item_price">₹1010/mon</i></p>
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
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/1/01_front_8k_1_1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Delight NXT RO+UV+UF+TA Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3020</span> <i className="item_price">₹1999/mon</i></p>
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
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/5dacb12e56b80562394993655c6849d4/0/2/02_front_1.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Marvel NXT RO+UV+MTDS+Alkaline Water Purifier</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3520</span> <i className="item_price">₹2000/mon</i></p>
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
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <img src="https://eflcdncustomorigin.azureedge.net/pub/media/catalog/product/cache/d873a73ae05d7bae551e2ca2a8470f3b/i/v/ivory_1_1_1_1.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Aquaguard Ivory RO+UV+TA</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3520</span> <i className="item_price">₹2190/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-nova-silver-ro-4-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Nova Silver RO 4 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1060</span> <i className="item_price">₹650/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-silver-boost-27-litre-water-purifierlarge.jpg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Silver Boost 27 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1390</span> <i className="item_price">₹850/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-viva-silver-uv-uf-6-litre-water-purifier.jpeg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Viva Silver UV+UF 6 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹550</span> <i className="item_price">₹220/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Coffee Maker" />
                                                 <input type="hidden" name="amount" value="220.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-ultima-silver-ro-uv-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Ultima Silver RO+UV 7 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1390</span> <i className="item_price">₹758/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-desire-plus-27-litre-water-purifier-large.jpg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Desire+ 27 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1190</span> <i className="item_price">₹799/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/235/tata-swach-platina-silver-ro-7-litre-water-purifier.jpg?v=74" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Tata Swach Platina Silver RO 7 Litre Water Purifier Price</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1090</span> <i className="item_price">₹769/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Water Purifier" />
                                                 <input type="hidden" name="amount" value="350.00" />
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

export default Purifiers
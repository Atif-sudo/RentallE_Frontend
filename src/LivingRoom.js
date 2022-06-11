import React,{useState,useEffect} from 'react'
import Menu from './Menu'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'

const LivingRoom = ({isLoggedIn,setIsLoggedIn, cart ,setCart, addToCart}) => {


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
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">SOFA</a></li>
                                <li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">SOFA SETS</a> </li>
                                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">RECLINER</a> </li>
                                <li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">MULTI FUNCTIONAL </a> </li>
                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JbuKF5N4_mobile_Recliner-Fusil-entertainmet-unit-Basic-Mobile.jpg" alt="" className="img-responsive"/>

                                        
                                                 <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Marbello Accent Chair</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1000</span><i className="item price">₹720</i> </p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart"/>
                                                 <input type="hidden" name="add" value="1"/>
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
                                                 <input type="hidden" name="amount" value="720.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/UaCrVmHu_mobile_Accent-Chair-Dual-Prime-Mobile.jpg" alt=" " className="img-responsive" />

                                             
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Marbello Accent Chair -Twin Package</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3740</span> <i className="item_price">₹1500</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone2" />
                                                 <input type="hidden" name="amount" value="1500.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/tOum6IBC_mobile_New-Recliner-Basic-Mobile.jpg" alt=" " className="img-responsive" />                                         

                                             
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">The Lounger</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1299</span> <i className="item_price">₹580</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone2" />
                                                 <input type="hidden" name="amount" value="580.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/opeVBlMv_mobile_Flex-Lana-Brown-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Three-seater Living Room - Coco</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1699</span> <i className="item_price">₹680</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Jri0eMQE_mobile_Flex-Lilac-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Ottoman -Lilac</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹699</span> <i className="item_price">₹280/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6s4hTpcX_mobile_mobile__27_.jpg" alt="" className="img-responsive"/>

                                        
                                                 <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Flex L- Shaped Living Room</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2049</span><i className="item price">₹820/mon</i> </p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart"/>
                                                 <input type="hidden" name="add" value="1"/>
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
                                                 <input type="hidden" name="amount" value="720.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>
                                            <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nYYRnkA0_mobile_Stool_Mobile.jpg" alt="" className="img-responsive"/>

                                        
                                                 <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">Takino Low Seat</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹349</span><i className="item price">₹140/mon</i> </p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart"/>
                                                 <input type="hidden" name="add" value="1"/>
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone1"/>
                                                 <input type="hidden" name="amount" value="720.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>


                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/JrigiJEQ_mobile_Flex-Grey-Ottomon-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Ottoman -Grey</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹699</span> <i className="item_price">₹280/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cE7wRH3D_mobile_Accent-Chair-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Marbello Accent Chair</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1799</span> <i className="item_price">₹7/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PSM1prch_mobile_Flex-Leatherette-3-Seater-L-Shape-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex L-Shaped Living Room - Leatherette</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2299</span> <i className="item_price">₹920/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                      
                                    <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/0Q0eI8zI_mobile_Vive-Azure-Single-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Vive Single Seater -Azure</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹699</span> <i className="item_price">₹280/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/ciKPTY2y_mobile_Flex-2-Seater-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex  Two Seater Sofa</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1049</span> <i className="item_price">₹420/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="680.00"/>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/P2aei5Cu_mobile_Lilac-Amor-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Amor Lilac Four-seater Living Room</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4099</span> <i className="item_price">₹1650/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/F2yAa3rB_mobile_Mobile__5_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Pico Five-seater Living Room (Oriental)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2489</span> <i className="item_price">₹1150/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/yJ6jiFff_mobile_Mobile__8_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Lana Sofa-cum- bed Mocha</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3199</span> <i className="item_price">₹1250/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PaIlcTLA_mobile_Mobile__10_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Vive -Five Seater Leaving Room -Azure</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2749</span> <i className="item_price">₹1050/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/PhbpFZYD_mobile_Flex-2seater-ottomen-Value-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Amor Leaving Room </a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4199</span> <i className="item_price">₹1680/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/af0JfcbN_mobile_Basic_Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Four-seater Leaving Room </a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2249</span> <i className="item_price">₹900/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/CIda27WL_mobile_Vive-manhatten-5-seater-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Vive Five -seater Leaving Room  -Aqua</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2749</span> <i className="item_price">₹1100/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/uxeQ47OU_mobile_Mobile_v.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Five -seater Leaving Room</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3049</span> <i className="item_price">₹1220/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AL8cEQhH_mobile_Flex-3Seater-Recliner-Value-Mobile.gif" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex FLeaving Room with Lounger</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4649</span> <i className="item_price">₹1420/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Headphones" />
                                                 <input type="hidden" name="amount" value="150.00" />
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/Tya92x75_mobile_Mobile__7_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">The Lounger</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2999</span> <i className="item_price">₹920</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="The Lounger" />
                                                 <input type="hidden" name="amount" value="920.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/KQrwFVaB_mobile_Recliner-Fusil-entertainmet-unit-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Twin Adobe</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹4649</span> <i className="item_price">₹1860</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Twin Adobe" />
                                                 <input type="hidden" name="amount" value="₹1860.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/66EztQD8_mobile_Recliner-Bricks-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">The Fabric Lounger Brick</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1599</span> <i className="item_price">₹640/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="The Fabric Lounger Brick" />
                                                 <input type="hidden" name="amount" value="₹640.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cQBhV6EM_mobile_Motorised-Recliner-Tan-Basic-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Fluent Motorised Recliner - Chocolate</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2849</span> <i className="item_price">₹860/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="The Fabric Lounger Brick" />
                                                 <input type="hidden" name="amount" value="860.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/nZSfnXmT_mobile_Recliner-Teal-Basic-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">The Fabric Lounger Teal</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2299</span> <i className="item_price">₹920/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="The Fabric Lounger Brick" />
                                                 <input type="hidden" name="amount" value="920.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/GFOs32W5_mobile_Flex-3Seater-Recliner-Basic-Mobile.gif" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Flex Living Room with Lounger</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2599</span> <i className="item_price">₹1040/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Flex Living Room with Lounger" />
                                                 <input type="hidden" name="amount" value="1040.00" />
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/AOB2X6zY_mobile_Mobile__74_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bounce</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2590</span> <i className="item_price">₹920/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Bounce" />
                                                 <input type="hidden" name="amount" value="920.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/6bzDcTxH_mobile_Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Takino 4-Seater Coffee Table Set</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2990</span> <i className="item_price">₹960/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="akino 4-Seater Coffee Table Set"/>
                                                 <input type="hidden" name="amount" value="960.00"/>
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/QyJWmNcG_mobile_Nauka-Value-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Nauka Diwan- Nautical</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2049</span> <i className="item_price">₹810/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Nauka Diwan- Nautical" />
                                                 <input type="hidden" name="amount" value="810.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/j7SBoVcW_mobile_Moblie.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bounce -M</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1949</span> <i className="item_price">₹720/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Bounce -M" />
                                                 <input type="hidden" name="amount" value="720.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/cDzLkDdm_mobile_Mobile-3__3_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bounce (Blue)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2399</span> <i className="item_price">₹960/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Bounce (Blue)" />
                                                 <input type="hidden" name="amount" value="960.00" />
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

export default LivingRoom
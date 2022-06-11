import React, {useState} from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import Cookies from 'universal-cookie';

const Vehicles = ({isLoggedIn,setIsLoggedIn}) => {

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
                        <form action="#" method="post" className="last">
                            <input type="hidden" name="cmd" value="last"/>
                            <input type="hidden" name="display" value="1"/>
                            <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                        </form>
                    </div>


                </div>
      <Menu/>
      <div className="banner-bottom">
                <div className="container">

                    <div className="col-md-12 wthree_banner_bottom_right">
                        <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                            <ul id="myTab" className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">BICYCLE</a></li>
                                <li role="presentation"><Link to="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">SCOOTY</Link> </li>
                                <li role="presentation"><Link to="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">BIKE</Link> </li>
                                <li role="presentation"><Link to="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">CAR</Link> </li>
                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                    
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/YeIlQgvn_mobile_MTB-Red-Mobile.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><Link to="#">MTB 21 Speed Bike</Link> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3340</span><i className="item price">₹1350/mon</i> </p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart"/>
                                                 <input type="hidden" name="add" value="1"/>
                                                 <input type="hidden" name="w3ls_item" value="MTB 21 Speed Bike"/>
                                                 <input type="hidden" name="amount" value="1350.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/9JYQi0R9_mobile_I-geared-Steel-Mobile-2.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Single Gear Alloy Bike</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2499</span> <i className="item_price">₹1000/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Single Gear Alloy Bike" />
                                                 <input type="hidden" name="amount" value="1000.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/OgQUQARf_mobile_I-geared-Steel-Mobile-3.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="single.html">Single gear Steel Bike</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹2250</span> <i className="item_price">₹840/mon</i></p>
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
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <img src="https://assets.furlenco.com/image/upload/c_fit,dpr_1.0,f_auto,q_auto,w_360/v1/furlenco-images/gkZLjH16_mobile_Hybrid-Black-Green-Mobile.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="single.html">Hybrid 21 Speed Bike</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹3590</span> <i className="item_price">₹1440/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Mobile Phone3" />
                                                 <input type="hidden" name="amount" value="1440.00"/>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122309/vieste-300-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Keeway Viesta 300</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8000</span> <i className="item_price">₹5560/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/122311/sixties-300i-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Keeway Sixties 300i</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹7969</span> <i className="item_price">₹5899/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda Activa 6G</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹6969</span> <i className="item_price">₹4869/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">TVS Ntroq 125</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹5469</span> <i className="item_price">₹3869/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115139/access-right-front-three-quarter-5.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Suzuki Access 125</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹7569</span> <i className="item_price">₹4069/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49460/dio-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda Dio</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8069</span> <i className="item_price">₹5569/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/bw/models/tvs-jupiter-sheet-metal-wheel20210111113827.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">TVS Jupiter</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8869</span> <i className="item_price">₹5069/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44860/iqube-left-front-three-quarter-2.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">TVS iQube</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹10000</span> <i className="item_price">₹8649/mon</i></p>
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
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <img src="https://imgd.aeplcdn.com/310x174/n/cw/ec/114923/burgman-street-125-right-front-three-quarter.jpeg?isig=0" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Suzuki Burgman Street 125</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹11000</span> <i className="item_price">₹9089/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/himalayan/royal-enfield-himalayan.webp?v=30" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Royal Enfield Himalayan</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹18880</span> <i className="item_price">₹12850/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/classic-chrome/royal-enfield-classic-chrome.webp?v=6" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Royal Enfield Classic Chrome</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹20290</span> <i className="item_price">₹16280/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/royal-enfield/bullet-350/royal-enfield-bullet-350.webp?v=31" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Royal Enfield Bullet 350</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹22120</span> <i className="item_price">₹18750/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/hero/splendor-plus/hero-splendor-plus.webp?v=6" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Hero Splender</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8120</span> <i className="item_price">₹3750/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/cb-shine/honda-cb-shine.webp?v=21" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda CB Shine</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹9120</span> <i className="item_price">₹4050/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/honda/sp-125/honda-sp-125.webp?v=6" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda SP 125</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹8120</span> <i className="item_price">₹4000/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/yamaha/mt-15/yamaha-mt-15.webp?v=10" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Yamaha MT-15</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹10120</span> <i className="item_price">₹6000/mon</i></p>
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
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <img src="https://images.carandbike.com/bike-images/medium/bajaj/pulsar-150/bajaj-pulsar-150.webp?v=57" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Bajaj Pulsar 150</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹9120</span> <i className="item_price">₹6899/mon</i></p>
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
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/Toyota-innova-crysta.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Toyota Innova Cystra</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹29050</span> <i className="item_price">₹20820/mon</i></p>
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
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-glanza.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Toyota Glanza</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹22700</span> <i className="item_price">₹20680/mon</i></p>
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
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/toyota-urban-crusier.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Toyota Urban Cruiser</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹25520</span> <i className="item_price">₹20510/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>

                                     {/*Tata Motors*/}

                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tata-altroz.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Tata Altroz</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹20520</span> <i className="item_price">₹14510/mon</i></p>
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
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/safari-storme.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Tata Safari Strome</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹21520</span> <i className="item_price">₹16590/mon</i></p>
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
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/tiago-jtp.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Tata Sumo Gold</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹29520</span> <i className="item_price">₹24590/mon</i></p>
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Washing Machine" />
                                                 <input type="hidden" name="amount" value="510.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>


                                     {/*Honda Cars*/}


                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/city.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda City</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹26520</span> <i className="item_price">₹24660/mon</i></p>
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
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/amaze.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda Amaze</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹30520</span> <i className="item_price">₹28660/mon</i></p>
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
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <img src="https://nriol.com/images/accord-hybrid.png" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Honda Accord Hybrid</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹32520</span> <i className="item_price">₹29669/mon</i></p>
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

export default Vehicles
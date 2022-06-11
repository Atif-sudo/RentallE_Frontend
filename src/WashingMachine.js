import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from './Pages/Single/CustomerProfile';
import SellerProfile from './Pages/SellerProfile';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'
import Menu from './Menu'

const WashingMachine = ({isLoggedIn,setIsLoggedIn , cart ,setCart, addToCart}) => {
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
                                <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab">LG</a></li>
                                <li role="presentation"><a href="#audio" role="tab" id="audio-tab" data-toggle="tab" aria-controls="audio">SAMSUNG</a> </li>
                                <li role="presentation"><a href="#video" role="tab" id="video-tab" data-toggle="tab" aria-controls="video">WHIRLPOOL</a> </li>
                                <li role="presentation"><a href="#tv" role="tab" id="tv-tab" data-toggle="tab" aria-controls="tv">BOSCH</a> </li>
                                <li role="presentation"><a href="#kitchen" role="tab" id="kitchen-tab" data-toggle="tab" aria-controls="kitchen">HAIER</a> </li>
                                
                            </ul>
                         <div id="myTabContent" className="tab-content">
                             <div role="tabpanel" className="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                                 <div className="agile_ecommerce_tabs">
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <img src="https://m.media-amazon.com/images/I/71w4Yo0JLML._AC_UY218_.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><a href="single.html">LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine (P7020NGAZ, Dark Gray, Wind Jet Dry)</a> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹380</span><i className="item price">₹350/mon</i> </p>
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
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61McHnZ1BcL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG 7.5 Kg 5 Star Semi-Automatic Top Loading Washing Machine (P7515SRAZ, Burgundy, Roller Jet Pulsator), Large</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹330</span> <i className="item_price">₹302/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T65SKSF4Z, Middle Free Silver)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹250</span> <i className="item_price">₹245/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71sgMM9ZQ9L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T65SKSF4Z, Middle Free Silver)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹650</span> <i className="item_price">₹445/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61iP+jOEuoL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">LG 8 Kg 5 Star Semi-Automatic Top Loading Washing Machine (P8035SGMZ, Grey, Collar Scrubber)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹690</span> <i className="item_price">₹445/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71xgG2zwUbL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung 6.5 kg Semi-Automatic 5 Star Top Loading Washing Machine (WT667QPNDPGXTL, White and Maroon, Double Storm Pulsator)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1080</span> <i className="item_price">₹950/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/610osBbwucL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Diamond Drum)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1220</span> <i className="item_price">₹680/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71i8f3-DsuL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹920</span> <i className="item_price">₹610/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71Ilqmbv-xL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Samsung 8.5 Kg 5 Star Semi-Automatic Top Loading Washing Machine (WT85R4000LL/TL, Light Grey)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1120</span> <i className="item_price">₹410/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/619IXFN9gUL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 7.5 Kg 5 Star Fully-Automatic Top Loading Washing Machine with In-Built Heater (360 BLOOMWASH PRO (540) H 7.5, Graphite, Hexa Bloom Impeller)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹880</span> <i className="item_price">₹450/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/61yZL6bw+1L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine (SUPERB ATOM 7.0, Grey Dazzle, TurboScrub Technology)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹990</span> <i className="item_price">₹780/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/71lzebmm77L._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 7 Kg 5 Star Royal Plus Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL PLUS 7.0, Grey, Hard Water Wash)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1120</span> <i className="item_price">₹809/mon</i></p>
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
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <img src="https://m.media-amazon.com/images/I/5138lJKJziL._AC_UY218_.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Whirlpool 10.5 Kg Semi-Automatic Top Loading Washing Machine (Ace XL 10.5 Heater, Grey)</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1020</span> <i className="item_price">₹809/mon</i></p>
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
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14082/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bosch WAB16161IN 6 Kg Fully Automatic Front Load Washing Machine</a></h5>
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
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14085/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bosch WAJ24262IN 7 Kg Fully Automatic Front Load Washing Machine</a></h5>
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
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14152/0/big.jpg?tr=w-420" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Bosch WOE654W0IN 6.5 Kg Fully Automatic Top Load Washing Machine</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹1520</span> <i className="item_price">₹910/mon</i></p>
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
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <img src="https://pdimg.pricedekho.com/2/14146/0/home.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Haier HWM62-707NZP 6.2 Kg Fully Automatic Top Load Washing Machine</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹960</span> <i className="item_price">₹450/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-hw70-b12636nzp-7-kg-fully-automatic-front-loading-washing-machine-large.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Haier HW70-B12636NZP 7 Kg Fully Automatic Front Loading Washing Machines</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹390</span> <i className="item_price">₹350/mon</i></p>
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
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <img src="https://www.compareprix.in/images/resizeimages/product/128/haier-htw80-1128-8-kg-semi-automatic-top-loading-washing-machine-large.jpeg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <a href="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><a href="single.html">Haier HTW80-1128 8 Kg Semi Automatic Top Loading Washing Machine</a></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>₹950</span> <i className="item_price">₹820/mon</i></p>
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

export default WashingMachine
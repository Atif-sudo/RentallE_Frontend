import React, {useState,useEffect} from "react";
import './App.css';
import Menu from "./Menu";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import {Dialog} from "@mui/material";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import CustomerProfile from "./Pages/Single/CustomerProfile";
import SellerProfile from "./Pages/SellerProfile";


import {
    Link
  } from "react-router-dom";
import Header from "./Pages/Home/Header";
import AuthModule from "./Pages/Home/AuthModule";

function Home({isLoggedIn,setIsLoggedIn}){
    const [sign_in_up_model,setsignin_up_model]= useState('')
    const [catList,setCatList] = useState([]);
    const cookies = new Cookies();

    const [cat,setCat] = useState(0);

  
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
                const cookies = new Cookies();
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

    const callCategoryApi = () => {
        axios.get(`http://127.0.0.1:8080/Rentalle/v1/category/lists`).then((res)=>{
            
            setCatList(res.data.data);
            

        }).catch((err)=>{
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
       localStorage.clear()
        const myTimeout = setTimeout(delayLogout, 3100);
    }

    

    useEffect(() => {
      callCategoryApi();
    }, [])
    

    return(
        <div className="App">
            <div className="header" id="home1">
                <div className="container">
                    <div className="w3l_login">
                      <a href="javascript:void(0)" onClick={loginButtonClickHandle} data-toggle="modal" data-target="myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
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

            </div>

            <Menu></Menu>

        <div className="banner">
            <div className="container">
                <h3>RentallE Store, <span>Special Offers</span></h3>
            </div>
        </div>

        <div className="banner-bottom">
            <div className="container">
                <div className="col-md-12 wthree_banner_bottom_right">

                <section>
        <div className="container">
            <div className="text-muted mt-5 mb-5 text-center display-4"><h2>CATEGORIES</h2></div>
            <hr/>
            <div className="row">
                {
                    
                    catList?.map((array,index) =>{

                        return (
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 p-2">
                            <div className="card p-3 shadow text-center border-0">
                                <div className="card-body">
                                    <img src={`assets/images/${array.category_logo}`}/>                            <hr/>
                                    <h5 className="card-title display-1">
                                        <Link to={`${array.category_action}/${array.ID}`}>{array.CategoryName}</Link>
                                        </h5>
                                </div>
                            </div>
                        </div>
                          )
                    })
                }
            </div>
           
        </div>
    </section>


                </div>
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
                            <button type="button" onClick={()=>document.getElementById('profileModal').style.display='none'} className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <div className="logout-container text-right">
                                <button type="button" class="btn btn-danger" onClick={(e)=>{logOut(e)}}>Log out</button>
                            </div>
                            <h4 className="modal-title">
                                Profile Details
                            </h4>
                        </div>
                        <div className="modal-body modal-body-sub">
                            <div className="row">
                               
                                <div className="col-md-4" >
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">{cookies.get('usr1236emmffjsv').FullName}</div>
                                </div>
                                
                                <div className="col-md-4" >
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">{cookies.get('usr1236emmffjsv').Email}</div>
                                </div>
                                
                                <div className="col-md-4">
                                <div class="shadow-lg p-3 mb-5 bg-body rounded profile-details">{cookies.get('usr1236emmffjsv').MobileNo}</div>
                                </div>               
                            
                            </div>

                            <div class=" mt-2">
                            {
                                cookies.get('usr1236emmffjsv').is_customer ? <CustomerProfile Id = {cookies.get('usr1236emmffjsv').ID} /> : <SellerProfile Id = {cookies.get('usr1236emmffjsv').ID} />
                            }
                            {/* <form class="row g-3 gy-2 gx-3 align-items-center">
                            
                                                               
                                <div className="">


                                    <div class="col-md-6">

                                    <label for="exampleFormControlSelect1">Category</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                    <option selected>Select</option>
                                    <option>Bed Room</option>
                                    <option>Living Room</option>
                                    <option>Vehicles</option>
                                    <option>Electronics</option>
                                    <option>Appliances</option>
                                    <option>Kitchen</option>
                                    </select>


                             

                                    </div>

                                
                                   
                                    
                                    <div className="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Product Description..."></textarea>

                                    </div>
                                    <label for="inputProduct" class="form-label">Product per Month</label>
                                        <input type="product" class="form-control" id="inputProduct" placeholder=" Product price in rupees"/>               


                                    <label for="exampleFormControlSelect1">Total Product</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                    <option selected>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    
                                    </select>

                                       
                                
                                    </div>

                                   

                                    <div className="mb-3 col-md-12">

                                    
                                        </div>

                                            <div className="col-md-12">

                                            <button  type="submit" class="btn btn-primary">Submit</button>

                                            </div>
                                                             
                                       

                                    </div>


                               

                                   
                                
                            
                                         
                                </form> */}
                            </div>   


                        </div>
                    </div>
                </div>
            </div>
            }


        </div>

    );
}


export default Home;
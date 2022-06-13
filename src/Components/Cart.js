
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import CustomerProfile from '../Pages/Single/CustomerProfile';
import SellerProfile from '../Pages/SellerProfile';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Menu from '../Menu';

const Cart = ({isLoggedIn,setIsLoggedIn, cart ,setCart, addToCart}) => {
    console.log(cart)
    const [sign_in_up_model,setsignin_up_model]= useState('')
    const cookies = new Cookies();

    let totalProduct=0;
    cart?.map((array,index) => {
        totalProduct += array.amount;
    })

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

   const  removeFromCart = (e,index) => {
    let newCart = cart?.filter((array) => {
        return array.id !== index;
    })
    console.log(newCart);
    setCart(newCart);
    localStorage.setItem("cart",JSON.stringify(newCart));
   }

   const checkOut = (e) => {
        e.preventDefault();
        if(!cookies.get('usr1236emmffjsv')){
            toast.error("Hey, Please login", {
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
        }else{
        let data = [];

        if (!cookies.get('usr1236emmffjsv').is_customer) {
            toast.error("Hey, Please login with your customer profile", {
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
        }else{

        
        cart?.map((array,index) => {
                let newData = {
                    productId : array.id,
                    amount: '' +(array.amount),
                    totalProduct:array.noOfProduct
                }
                data.push(newData);
        })

        let newdata = {
                products:data,
                userId:cookies.get('usr1236emmffjsv').ID
        }


           
        axios.post(`http://127.0.0.1:8080/Rentalle/v1/product/transact`,newdata)
            .then(res => {
              
            toast.success(res.data.message, {
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
}
}

  return (
    <div>
         {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
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

                


                </div>
      
      <Menu/>
     
     {/* Add cart page here to to show the data */}



     <div class="card">
            <div class="row m-4">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted">{cart.length} Items</div>
                        </div>
                    </div>   
                    {
                        cart?.map((array,index) => {
                            
                            return (
                                <div class="row border-top border-bottom m-4">
                                <div class="row main align-items-center">
                                 
                                    <div class="col">
                                        <div class="row text-muted">{cart[index].name}</div>
                                        <div class="row">{`No of items ${cart[index].noOfProduct}`}</div>
                                    </div>
                                   
                                    <div class="col"> &#8377; {cart[index].amount}<span class="close" onClick = {(e) => {removeFromCart(e,cart[index].id)}}>&#10005;</span></div>
                                </div>
                            </div>
                            )
                        })
                    } 
                   
                    <div class="back-to-shop"><Link to="/"><span class="text-muted">Back to shop</span></Link></div>
                </div>

                <div class="col-md-4 summary p-4">
                <form onSubmit={(e) => checkOut(e)} method = "POST">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div class="row">
                        <div class="col" >ITEMS {cart.length}</div>
                        <div class="col text-right">&#8377;  {totalProduct}</div>
                    </div>
                   
                        {/* <p>SHIPPING</p>
                        <select><option class="text-muted">Standard-Delivery- &#8377; 5.00</option></select>
                        <p>GIVE CODE</p> */}
                        <input id="code" placeholder="Enter your PinCode" />
                    
                    <div class="row" >
                        <div class="col">TOTAL PRICE</div>
                        <input type="hidden" name = "totalPrice" value = {totalProduct} /> 
                        <div class="col text-right">&#8377; {totalProduct} </div>
                    </div>
                    <button class="btn" type = "submit">CHECKOUT</button>
                    </form>
                </div>

            </div>
            
        </div>


     {/* Ended cart code here */}

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
                            <div class="logout-container text-right">
                            <button type="button" class="btn btn-danger mt-2" onClick={(e)=>(logOut(e))}>Logout</button>
                            </div>
                        
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
  )
}

export default Cart
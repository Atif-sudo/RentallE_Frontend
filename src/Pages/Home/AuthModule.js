import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import SellerProfile from '../SellerProfile';
import CustomerProfile from '../Single/CustomerProfile';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const AuthModule = ({isLoggedIn,setIsLoggedIn}) => {

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
    <>
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
    </>
  )
}

export default AuthModule
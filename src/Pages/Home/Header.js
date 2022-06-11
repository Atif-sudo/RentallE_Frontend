// import React,{useState} from 'react'
// import {
//     Link
//   } from "react-router-dom";

// const Header = ({isLoggedIn,setIsLoggedIn}) => {

//     const [sign_in_up_model,setsignin_up_model]= useState('')

    
//   return (
//       <>

//                 <div className="container">
//                     <div className="w3l_login">
//                       <a href="#" onClick={loginButtonClickHandle} data-toggle="modal" data-target="myModal88"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
//                     </div>

//                     <div className="w3l_logo">
//                         <h1><Link to="/">RentallE <span>Your Stores. Your Place.</span></Link></h1>
//                     </div>

//                     <div className="search">
//                         <input className="search_box" type="checkbox" id="search_box"/>
//                         <label className="indexContainer" for="search_box"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> </label>
//                         <div className="search_form">
//                             <form action="#" method="post">
//                                 <input type="text" name="search" placeholder="Search..."/>
//                                 <input type="submit" value="Send"/>
//                             </form>
//                         </div>
//                     </div>

//                     <div className="cart cart box_1">
//                         <form action="#" method="post" className="last">
//                             <input type="hidden" name="cmd" value="last"/>
//                             <input type="hidden" name="display" value="1"/>
//                             <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
//                         </form>
//                     </div>


//                 </div>
      
//       </>
//   )
// }

// export default Header
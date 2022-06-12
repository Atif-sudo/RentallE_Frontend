import React from "react";
import './App.css';

import {
    Link
  } from "react-router-dom";



function Menu(){
    return(
        <div className="navigation">
            <div className="container">
                <nav className=" navbar navbar-default">

                    <div className="navbar-header nav_2">
                        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                        <ul className="nav navbar-nav">
                            <li>
                                
                                    <Link to= "/">Home</Link> </li>

                            <li className="dropdown">
                                <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b> </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Bed Room</h6>
                                                <li><Link to="/bedroom/1">Queen Bed</Link> </li>
                                                <li><Link to="/bedroom/1">Storage Bed </Link> </li>
                                                <li><Link to="/bedroom/1">Single Bed</Link> </li>
                                                <li><Link to="/bedroom/1">Multi Functional <span>New</span></Link> </li>
                                                <li><Link to="/bedroom/1">Bedroom Storage</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Living Room</h6>
                                                <li><Link to="/livingroom/2">Sofa</Link> </li>
                                                <li><Link to="/livingroom/2">Sofa Sets </Link> </li>
                                                <li><Link to="/livingroom/2">Recliner<span>New</span></Link> </li>
                                                <li><Link to="/livingroom/2">Multi functional</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Vehicles</h6>
                                                <li><Link to="/vehicles/3">Bicycle</Link> </li>
                                                <li><Link to="/vehicles/3">Scooty </Link> </li>
                                                <li><Link to="/vehicles/3">Bike </Link> </li>
                                                <li><Link to="/vehicles/3">Car</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Purifier</h6>
                                                <li><Link to="/purifiers/4">Kent</Link> </li>
                                                <li><Link to="/purifiers/4">Pureit </Link> </li>
                                                <li><Link to="/purifiers/4">Livpure<span>New</span></Link> </li>
                                                <li><Link to="/purifiers/4">Aquaguard</Link> </li>
                                                <li><Link to="/purifiers/4">Tata</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Air Conditioner</h6>
                                                <li><Link to="/airconditioner/5">Voltas</Link> </li>
                                                <li><Link to="/airconditioner/5">Whirlpool </Link> </li>
                                                <li><Link to="/airconditioner/5">LG <span>New</span></Link> </li>
                                                <li><Link to="/airconditioner/5">Hitachi</Link> </li>
                                                
                                            </ul>
                                        </div>

                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Kitchen Appliances</h6>
                                                <li><Link to="/kitchenappliances/6">Microwaves</Link> </li>
                                                <li><Link to="/kitchenappliances/6">Refrigerator </Link> </li>
                                                <li><Link to="/kitchenappliances/6">Mixer Juicer Grinder</Link> </li>
                                                <li><Link to="/kitchenappliances/6">Oven Toaster Grills<span>New</span></Link> </li>
                                                
                                            </ul>
                                        </div>

                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Washing Machine</h6>
                                                <li><Link to="/washingmachine/7">LG</Link> </li>
                                                <li><Link to="/washingmachine/7">Samsung </Link> </li>
                                                <li><Link to="/washingmachine/7">Whirlpool</Link> </li>
                                                <li><Link to="/washingmachine/7">Bosch</Link> </li> 
                                                <li><Link to="/washingmachine/7">Haier</Link> </li>
                                                
                                            </ul>
                                        </div>

                                        <div className="col-sm-3">
                                            
                                                <div className="w3ls_products_pos">
                                                <h4>30%<i>Off/-</i></h4>
                                                <img src="images/1.jpg" alt="" className="img-responsive"/>
                                            </div>
                                        </div>

                                        {/* <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Purifier</h6>
                                                <li><a href="#">Kent</a> </li>
                                                <li><a href="#">Pureit </a> </li>
                                                <li><a href="#">Livpure</a> </li>
                                                <li><a href="#">Aquaguard</a> </li>
                                                <li><a href="#">Tata</a> </li>
                                            </ul>
                                        </div> */}
                                        
                                        <div className="clearfix"></div>
                                    </div>
                                    {/* <div className="row">

                                    <div className="col-sm-4">
                                            <div className="w3ls_products_pos">
                                                <h4>30%<i>Off/-</i></h4>
                                                <img src="images/1.jpg" alt="" className="img-responsive"/>
                                            </div>
                                        </div>

                                    </div> */}
                                </ul>
                            </li>

                            {/*
                            <li><Link to="#">About Us</Link> </li>
                            <li className="w3pages"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="icons.html">Web Icons</Link></li>
                                    <li><Link to="codes.html">Short Codes</Link></li>
                                </ul>
                            </li>
                                */}


                            <li><a href="mailto:20352033@pondiuni.ac.in">Mail Us</a></li>
                        </ul>

                    </div>
                </nav>

            </div>

        </div>

    );
}


export default Menu;
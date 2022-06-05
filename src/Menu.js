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
                            <li><a href="index.html"  className="act">
                                
                                    <Link to= "/">Home</Link></a> </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b> </a>
                                <ul className="dropdown-menu multi-column columns-3">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Bed Room</h6>
                                                <li><Link to="/bedroom/1#home">Queen Bed</Link> </li>
                                                <li><Link to="/bedroom/1#audio">Storage Bed </Link> </li>
                                                <li><Link to="/bedroom/1#video">Single Bed</Link> </li>
                                                <li><Link to="/bedroom/1#tv">Multi Functional <span>New</span></Link> </li>
                                                <li><Link to="/bedroom/1#kitchen">Bedroom Storage</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Living Room</h6>
                                                <li><Link to="/livingroom/2#home">Sofa</Link> </li>
                                                <li><Link to="/livingroom/2#audio">Sofa Sets </Link> </li>
                                                <li><Link to="/livingroom/2#video">Recliner<span>New</span></Link> </li>
                                                <li><Link to="/livingroom/2#tv">Multi functional</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Vehicles</h6>
                                                <li><Link to="/vehicles/3#home">Bicycle</Link> </li>
                                                <li><Link to="/vehicles/3#audio">Scooty </Link> </li>
                                                <li><Link to="/vehicles/3#video">Bike </Link> </li>
                                                <li><Link to="/vehicles/3#tv">Car</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Purifier</h6>
                                                <li><Link to="purifiers/4#home">Kent</Link> </li>
                                                <li><Link to="/purifiers/4#audio">Pureit </Link> </li>
                                                <li><Link to="/purifiers/4#video">Livpure<span>New</span></Link> </li>
                                                <li><Link to="/purifiers/4#tv">Aquaguard</Link> </li>
                                                <li><Link to="#">Tata</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Air Conditioner</h6>
                                                <li><Link to="#">Voltas</Link> </li>
                                                <li><Link to="#">Whirlpool </Link> </li>
                                                <li><Link to="#">LG <span>New</span></Link> </li>
                                                <li><Link to="#">Hitachi</Link> </li>
                                                
                                            </ul>
                                        </div>

                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Kitchen Appliances</h6>
                                                <li><Link to="#">Microwaves</Link> </li>
                                                <li><Link to="#">Refrigerator </Link> </li>
                                                <li><Link to="#">Mixer Juicer Grinder</Link> </li>
                                                <li><Link to="#">Oven Toaster Grills<span>New</span></Link> </li>
                                                
                                            </ul>
                                        </div>

                                        <div className="col-sm-3">
                                            <ul className="multi-column-dropdown">
                                                <h6>Washing Machine</h6>
                                                <li><Link to="#">LG</Link> </li>
                                                <li><Link to="#">Samsung </Link> </li>
                                                <li><Link to="#">Whirlpool</Link> </li>
                                                <li><Link to="#">Bosch</Link> </li> 
                                                <li><Link to="#">Haier</Link> </li>
                                                
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
                            <li><Link to="#">About Us</Link> </li>
                            <li className="w3pages"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="icons.html">Web Icons</Link></li>
                                    <li><Link to="codes.html">Short Codes</Link></li>
                                </ul>
                            </li>


                            <li><Link to="#">Mail Us</Link></li>
                        </ul>

                    </div>
                </nav>

            </div>

        </div>

    );
}


export default Menu;
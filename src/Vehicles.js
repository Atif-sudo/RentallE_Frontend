import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const Vehicles = () => {
  return (
    <div>
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
                                             <img src="assets/images/3.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/4.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/5.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/6.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/7.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/3.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/4.jpg" alt="" className="img-responsive"/>
                                             <img src="assets/images/5.jpg" alt="" className="img-responsive"/>
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>

                                         <h5><Link to="#">Mobile Phone1</Link> </h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$380</span><i className="item price">$350</i> </p>
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
                                             <img src="assets/images/4.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/5.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/6.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/7.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/3.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/4.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/5.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/6.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Mobile Phone2</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$330</span> <i className="item_price">$302</i></p>
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
                                             <img src="assets/images/7.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/6.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/4.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/3.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/5.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/7.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/4.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/6.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="single.html">Mobile Phone3</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$250</span> <i className="item_price">$245</i></p>
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
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Speakers</Link></h5>
                                         <p><span>$320</span> <i className="item_price">$250</i></p>
                                         <div className="simpleCart_shelfItem">
                                             <form action="#" method="post">
                                                 <input type="hidden" name="cmd" value="_cart" />
                                                 <input type="hidden" name="add" value="1" />
                                                 <input type="hidden" name="w3ls_item" value="Speakers" />
                                                 <input type="hidden" name="amount" value="250.00" />
                                                 <button type="submit" className="w3ls-cart">Add to cart</button>
                                             </form>
                                         </div>
                                     </div>
                                     <div className="col-md-4 agile_ecommerce_tab_left">
                                         <div className="hs-wrapper">
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Headphones</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$180</span> <i className="item_price">$150</i></p>
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
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/10.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/8.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/9.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal1"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Audio Player</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$220</span> <i className="item_price">$180</i></p>
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
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Laptop</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$880</span> <i className="item_price">$850</i></p>
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
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Notebook</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$290</span> <i className="item_price">$280</i></p>
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
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/13.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/11.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/12.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal2"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Kid's Toy</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$120</span> <i className="item_price">$80</i></p>
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
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Refrigerator</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$950</span> <i className="item_price">$820</i></p>
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
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">LED Tv</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$700</span> <i className="item_price">$680</i></p>
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
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/16.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/14.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/15.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal3"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Washing Machine</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$520</span> <i className="item_price">$510</i></p>
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
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Grinder</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$460</span> <i className="item_price">$450</i></p>
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
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Water Purifier</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$390</span> <i className="item_price">$350</i></p>
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
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/19.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/18.jpg" alt=" " className="img-responsive" />
                                             <img src="assets/images/17.jpg" alt=" " className="img-responsive" />
                                             <div className="w3_hs_bottom">
                                                 <ul>
                                                     <li>
                                                         <Link to="#" data-toggle="modal" data-target="#myModal4"><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span></Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <h5><Link to="#">Coffee Maker</Link></h5>
                                         <div className="simpleCart_shelfItem">
                                             <p><span>$250</span> <i className="item_price">$220</i></p>
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
                         </div>
                     </div>
                 </div>

             </div>
         </div>
            </div>
    
  )
}

export default Vehicles
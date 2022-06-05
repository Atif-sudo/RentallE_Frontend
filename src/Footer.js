import { Link } from 'react-router-dom';
import './App.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="w3_footer_grids">
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Contact</h3>
                        <p>Mohammed Atif Ansari</p>
                        <ul className="address">
                            <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i>Room No-91 , Shri Aurobindo Hostel, Pondicherry University <span>Puducherry.</span></li>
                            <li><i className="glyphicon glyphicon-envelope" aria-hidden="true"></i><Link to="#">20352033@pondiuni.ac.in</Link></li>
                            <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i>+91 7470693743</li>
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Information</h3>
                        <ul className="info">
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="codes.html">Short Codes</Link></li>
                            <li><Link to="faq.html">FAQ's</Link></li>
                            <li><Link to="products.html">Special Products</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Category</h3>
                        <ul className="info">
                            <li><Link to="/bedroom/1">Bed Room</Link></li>
                            <li><Link to="/livingroom/2">Living Room</Link></li>
                            <li><Link to="/vehicles/3">Vehicles</Link></li>
                            <li><Link to="/purifiers/4">Purifiers</Link></li>
                            <li><Link to="/airconditioner/5">Air Conditioner</Link></li>
                            <li><Link to="/kitchenappliances/6">Kitchen Appliances</Link></li>
                            <li><Link to="/washingmachine/7">Washing Machine</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-3 w3_footer_grid">
                        <h3>Profile</h3>
                        <ul className="info">
                            <li><Link to="index.html">Home</Link></li>
                            <li><Link to="products.html">Today's Deals</Link></li>
                        </ul>
                        <h4>Follow Us</h4>
                        <div className="agileits_social_button">
                            <ul>
                                <li><Link to="#" className="facebook"> </Link></li>
                                <li><Link to="#" className="twitter"> </Link></li>
                                <li><Link to="#" className="google"> </Link></li>
                                <li><Link to="#" className="pinterest"> </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="footer-copy1">
                    <div className="footer-copy-pos">
                        <a href="#home1" className="scroll"><img src="../assets/images/arrow.png" alt=" " className="img-responsive" /></a>
                    </div>
                </div>
                <div className="container">
                    <p>&copy; 2022 RentallE Store. All rights reserved | Design by MOHAMMED ATIF ANSARI</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;
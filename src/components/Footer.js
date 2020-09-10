import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
		<footer className="footer-distributed">
 
 <div className="footer-left">

 <h3>Newari <span>Khaja Ghar</span></h3>

 <p className="footer-links">
<Link to ="#">Home</Link>
		
<Link to ="/restaurants">foods</Link>
<Link to ="#">About</Link>
<Link to ="#">Faq</Link>
<Link to ="#">Contact</Link>
</p>
 <p className="footer-company-name">Newari Khaja Ghar &copy; 2020</p>
 </div>

 <div className="footer-center">

 <div>
 <i className="fa fa-map-marker"></i>
 <p><span>New Road, Nepal</span>khajaghar@gmail.com</p>
 </div>

 <div>
 <i className="fa fa-phone"></i>
 <p>+977 9843410568</p>
 </div>

 <div>
 <i className="fa fa-envelope"></i>
 <p><a href="mailto:contact@newarirestaurant.com">contact@newarirestaurant.com</a></p>
 </div>

 </div>

 <div className="footer-right">

 <p className="footer-company-about">
 <span>About the company</span>
 Newari Khaja Ghar is online authentic newari food portal. You can call us or message us to order food at your destination. 
</p>	
 <div className="footer-icons">
<Link to="#"><FaFacebook /></Link>
<Link to="#"><FaInstagram /></Link>
<Link to="#"><FaTwitter /></Link>
<Link to="#"><FaGoogle /></Link>
 </div>
 
 </div>
 
 </footer>
	<div className="copyright">
	Newari Khaja Ghar © 2020
</div>	
</>
	)
}

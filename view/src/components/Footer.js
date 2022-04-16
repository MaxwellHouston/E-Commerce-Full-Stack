import React from "react";
import { Link } from "react-router-dom";
import twitterLogo from '../utilities/images/icons/twitter.svg';
import facebookLogo from '../utilities/images/icons/facebook.svg';
import instagramLogo from '../utilities/images/icons/instagram.svg';


export function AppFooter() {
    return(
        <footer>
        <div className="footer-container">
            <h4>About Us</h4>
            <ul>
                <li><Link to='#'>This Project</Link></li>
                <li><Link to='#'>About Me</Link></li>
                <li><Link to='#'>Github</Link></li>
            </ul>
        </div>
        <div className="footer-container">
            <h4>Information</h4>
            <ul>
                <li><Link to='#'>Your Account</Link></li>
                <li><Link to='#'>Your Orders</Link></li>
                <li><Link to='#'>Delete Account</Link></li>
            </ul>
        </div>
        <div className="footer-container">
            <h4>Help</h4>
            <ul>
                <li><Link to='#'>Track Package</Link></li>
                <li><Link to='#'>Cancel Order</Link></li>
                <li><Link to='#'>Customer Service</Link></li>
            </ul>
        </div>
        <div className="footer-container">
            <h4 id="socials-header">Follow Us</h4>
            <div className="socials-container">
                <img src={twitterLogo} className='social-logo' alt="twitter-logo" />
                <img src={facebookLogo} className='social-logo' alt="facebook-logo" />
                <img src={instagramLogo} className='social-logo' alt="instagram-logo" />
            </div>

        </div>
        <p className="copywrite">&copy; Max Sports Inc. 2022</p>    
        </footer>
    )
}
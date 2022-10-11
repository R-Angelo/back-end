import React from 'react';

// Styles
import '../styles/loginheader.css'


// image
import fb from '../image/facebook.png'
import ig from '../image/instagram.png'
import pac from '../image/pawsandclaws.jpg'
import search from '../image/searchicon.png'
import cart from '../image/shopping-cart.png'
import { DisabledByDefaultSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const LoginHeader = () => {
    return(
            <div className="header-section">
                <div class="header-main">
                    <div class="logo">
                        <Link to='/'><img src={pac} alt="pawsandclaws logo"></img></Link>
                    </div>
                    <ul className="follow">
                        <li>Follow us on:</li>
                        <li><a to="https://www.facebook.com/pawsandclaws081520/" target="_blank"><img src={fb} alt="FBicom"></img></a></li>
                        <li><a to="#"><img src={ig} alt="IGicon"></img></a></li>
                    </ul>
                </div>
            </div>
    )
}

export default LoginHeader
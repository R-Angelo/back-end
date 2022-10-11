import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import '../styles/header.css'


// image
import fb from '../image/facebook.png'
import ig from '../image/instagram.png'
import pac from '../image/pawsandclaws.jpg'
import search from '../image/searchicon.png'
import profile from '../image/user.png'

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const cartStyle ={
        color: 'white'
    }
  return (
    <div className='main'>
    
    <div className="header-section">
            <div className="header-container">
                <div className="follow">
                    <h4>Follow us on: </h4>
                    <div className="fbcontainer"><a href="https://www.facebook.com/pawsandclaws081520/" target="_blank"><img src={fb} alt="fbicon"></img></a></div>
                    <div className="igcontainer"><img src={ig} alt="igicon"></img></div>
                </div>
                <ul className="about">
                    <li><a href="#about-section">About</a></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><span></span></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
            
            <div className="search-section">
                <div className="search-container">
                    <div className="logo">
                        <div className="img-container">
                            <Link to="/"><img src={pac} alt=""></img></Link>
                        </div>
                    </div>

                    <div className="search-input">
                        <input type="search" name="search" id="search" placeholder="Search..."></input>
                        <div className="search-logo">
                            <img src={search} alt="searchicon"></img>
                        </div>
                    </div>

                    <div className="cart">
                        <Link to="/cart">
                            <ShoppingCartIcon fontSize='large' style={cartStyle} />
                        </Link>
                    </div>

                    <div className="profile">
                        <div className='profile-container'>
                            <Link to="/myaccount">
                                <img src={profile} />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
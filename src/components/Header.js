import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import '../styles/header.css'


// image
import pac from '../image/pawsandclaws.jpg'
import profile from '../image/user.png'

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { borderRadius } from '@mui/system';
import { green } from '@mui/material/colors';

const Header = () => {
    const cartStyle ={
        color: 'white'
    }
    const fbIcon = {
        color: 'white'
    }
    const igIcon = {
        color: 'white'
    }
  return (
    <div className='main'>
    
    <div className="header-section">
            <div className="header-container">
                <div className="follow">
                    <h4>Follow us on: </h4>
                    <div className="fbcontainer"><a href="https://www.facebook.com/pawsandclaws081520/" target="_blank"><FacebookIcon fontSize='medium' style={fbIcon} /></a></div>
                    <div className="igcontainer"><InstagramIcon fontSize='medium' style={igIcon} /></div>
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
                        <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', backgroundColor: 'white', borderRadius: '25px' }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        </Paper>
                    </div>

                    <div className="cart">
                        <Link to="/cart">
                            <ShoppingCartIcon fontSize='large' style={cartStyle} />
                        </Link>
                    </div>

                    <div className="profile">
                            <Link to="/myaccount">
                                <Avatar
                                    alt="Remy Sharp"
                                    src={profile}
                                    sx={{ width: 56, height: 56, bgcolor: 'white' }}
                                >
                                </Avatar>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

// component
import Header from './Header'
import Footer from './Footer'

// Styles
import '../styles/mypurchase.css'

// Image
import beefpro from '../image/beefpro.jpg'
import profile from '../image/user.png'

// Icon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MyPurchase() {
  return (
    <div>
        <Header />
    <div className="main-content-container">
        <div className="menu-bar">
            <div className="profile-container">
                <div className="user-icon-container">
                    <img src={profile} alt="" />
                </div>
                <div className="username-container">
                    <p>Username</p>
                    <p><Link to="/myaccount">Edit profile</Link></p>
                </div>
            </div>
            <hr />
            <div className="menu-container">
                <ul>

                    <li>
                        <div className="dropdown">
                            <Link to="/myaccount">My Account 
                                <div className="dropdown-logo-container"> 
                                    <ArrowDropDownIcon />
                                </div>
                            </Link>
                            <div className="dropdown-content">
                                <Link to="/myaccount">My Profile</Link>
                                <Link to="#">Addresses</Link>
                                <Link to="#">Change Password</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to='/mypurchase'>
                            My Purchase
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
        <div className="content-container">
            <div className="content-header"><Link to="#">All</Link>
                    <Link to="#">To pay</Link>
                    <Link to="#">To Receive</Link>
                    <Link to="#">To Ship</Link>
                    <Link to="#">Completed</Link>
                    <Link to="#">Cancelled</Link>
            </div>
            <div className="purchase-container">
                <div className="purchase-border">
                    <div className="purchase-header">
                        <h4>Status: To Receive </h4>
                    </div>
                    <hr />
                    <div className="purchase">
                        <div className="img-container">
                            <img src={beefpro} alt="Product-image" />
                        </div>
                        <div className="product-details">
                            <h3>Pangalan ng product</h3>
                            <p>Variation: </p>
                            <h4>Quantity: </h4>
                        </div>
                        <hr />
                        <div className="price">
                            <p>P123</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <button>Order received</button>
                        <p>Order Total: <span>P123.00</span></p>
                    </div>
                </div>

                <div className="purchase-border">
                    <div className="purchase-header">
                        <h4>Status: To Receive </h4>
                    </div>
                    <hr />
                    <div className="purchase">
                        <div className="img-container">
                            <img src={beefpro} alt="Product-image" />
                        </div>
                        <div className="product-details">
                            <h3>Pangalan ng product</h3>
                            <p>Variation: </p>
                            <h4>Quantity: </h4>
                        </div>
                        <div className="price">
                            <p>P123</p>
                        </div>
                    </div>
                    <div className="purchase">
                        <div className="img-container">
                            <img src={beefpro} alt="Product-image" />
                        </div>
                        <div className="product-details">
                            <h3>Pangalan ng product</h3>
                            <p>Variation: </p>
                            <h4>Quantity: </h4>
                        </div>
                        <div className="price">
                            <p>P123</p>
                        </div>
                    </div>
                    <hr />
                    <div className="total">
                        <button>Order received</button>
                        <p>Order Total: <span>P123.00</span></p>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default MyPurchase
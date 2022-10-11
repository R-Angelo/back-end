import React from 'react'
import { Link } from 'react-router-dom'

// component
import Header from './Header'
import Footer from './Footer'

//styles
import '../styles/myaccount.css'

// icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// image
import profile from '../image/user.png'

const MyAccount = () => {
    return (
        <>
            <Header />
            <div class="main-content-container">
                <div class="menu-bar">
                    <div class="profile-container">
                        <div class="user-icon-container">
                            <img src={profile} alt="" />
                        </div>
                        <div class="username-container">
                            <p>Username</p>
                            <p><Link href="/myaccount">Edit profile</Link></p>
                        </div>
                    </div>
                    <hr />
                    <div class="menu-container">
                        <ul>
                            <li>
                                <div class="dropdown">
                                    <Link href="/myaccount">My Account 
                                        <div class="dropdown-logo-container"> 
                                            <ArrowDropDownIcon />
                                        </div>
                                    </Link>
                                    <div class="dropdown-content">
                                        <Link to="/myaccount">My Profile</Link>
                                        <Link href="#">Addresses</Link>
                                        <Link href="#">Change Password</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/mypurchase">
                                    My Purchase
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="myaccount-container">
                    <div class="accountdata-container">
                        <h1>My Profile</h1>
                        <label><h3>Name</h3></label>
                        <input type="text" name="name" id="name" />
                        <label><h3>Email</h3></label>
                        <label id="email" name="email">example@email.com</label>
                        <label><h3>Phone Number</h3></label>
                        <label id="number" name="number">09123456789</label>
                        <label><h3>Gender</h3></label>
                        <label id="gender" name="gender">Male</label>
                        <label><h3>Date of birth</h3></label>
                        <input type="date" name="dob" id="dob" />
                    </div>
                    <div class="accountprofile-container">
                        <div class="image-container">
                            <img src={profile} alt="User profile" />
                        </div>
                        <button>Select image</button>
                        <label> File extension: .JPEG .PNG</label>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyAccount
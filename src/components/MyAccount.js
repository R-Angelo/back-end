import React from 'react'
import { Link } from 'react-router-dom'

// component
import Header from './Header'

//styles
import '../styles/myaccount.css'

// icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// image
import profile from '../image/user.png'


//MUI
import { Divider, ListItem, Paper } from '@mui/material'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';




const MyAccount = () => {
    const style = {
        width: '100%',
        maxWidth: 360,
      };
    return (
        <>
            <Header />
            <div className="main-content-container">
                <Paper elevation={3} className="menu-bar" >
                    <div className="profile-container">
                        <div className="user-icon-container">
                            <img src={profile} alt="" />
                        </div>
                        <div className="username-container">
                            <p>Username</p>
                            <p><Link href="/myaccount">Edit profile</Link></p>
                        </div>
                    </div>
                    <Divider sx={{padding: 1}} />
                    <Paper className="menu-container" sx={{borderRadius: '0'}}>
                        <List sx={style} component="nav" aria-label="mailbox folders">
                                <div className="dropdown">
                                    <Link href="/myaccount">My Account 
                                        <div className="dropdown-logo-container"> 
                                            <ArrowDropDownIcon />
                                        </div>
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link to="/myaccount">My Profile</Link>
                                        <Link href="#">Addresses</Link>
                                        <Link href="#">Change Password</Link>
                                        <Link href="#">My Pet</Link>
                                    </div>
                                </div>
                            <Link to="/mypurchase">
                                <ListItem button>
                                    <ListItemText primary="My Purchase" />
                                </ListItem>
                            </Link>  

                        </List>
                    </Paper>
                </Paper>
                <div className="myaccount-container">
                    <div className="accountdata-container">
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
                    <div className="accountprofile-container">
                        <div className="image-container">
                            <img src={profile} alt="User profile" />
                        </div>
                        <button>Select image</button>
                        <label> File extension: .JPEG .PNG</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount

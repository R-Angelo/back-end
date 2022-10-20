import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

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

export default function Layout( { children }) {
    const style = {
        width: '100%',
        maxWidth: 360,
      };
  return (
    <div>
        {children}
        <Footer />
    </div>
  )
}
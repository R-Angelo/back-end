
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase-config'

//Components
import LoginHeader from './LoginHeader'


//Tools
import { CheckBox, Label } from '@mui/icons-material';
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@mui/material';

//icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Footer from './Footer';


function Login() {

    
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            alert('successfully login')
        } catch (e) {
            console.log(e.message);
        }
        
    }

    const logout = async () => {

    }

    const paperStyled = {
        padding: 20, height: '50vh', width: 500, margin: '150px auto'
    }
    const btnStyle={
        margin: '10px 0'
    }
  return (
    <Grid>
        <LoginHeader />
        <Paper elevation={6} style={paperStyled}>
            <Grid align='center'>
                <Avatar >
                    <PersonOutlineOutlinedIcon />
                </Avatar>
                <h2>Sign in</h2>
            </Grid>
            <Grid>
                <form noValidate autoComplete='off'>
                    <label>Email or Number</label>
                    <TextField id="emailnumber" variant="outlined" placeholder='Email or Number' onChange={(e) => setLoginEmail(e.target.value)} fullWidth required />

                    <label>Password</label>
                    <TextField id="password" type='password' variant="outlined" placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} fullWidth required />
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <Button variant="contained" fullWidth style={btnStyle} onClick={login} >Sign in</Button>
                    <Typography>
                        <Link href='#'>
                            Forgot Password?
                        </Link>
                    </Typography>
                    <hr></hr>
                    <Typography align='center'>
                        Don't have an account? <Link href="/signup"> Sign up here. </Link>
                    </Typography>
                </form>
            </Grid>
        </Paper>
        <Footer />
    </Grid>
  )
}

export default Login;

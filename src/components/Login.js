
import React from 'react'

//Components
import LoginHeader from './LoginHeader'
import Footer from './Footer'


//Tools
import { CheckBox } from '@mui/icons-material';
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@mui/material';

//icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


function Login() {

    const paperStyled = {
        padding: 20, height: '50vh', width: 500, margin: '100px auto'
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
                <label>Email or Number</label>
                <TextField id="emailnumber" variant="outlined" placeholder='Email or Number' fullWidth required />

                <label>Password</label>
                <TextField id="password" type='password' variant="outlined" placeholder='Password' fullWidth required />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Button variant="contained" type='submit' fullWidth style={btnStyle} >Sign in</Button>
                <Typography>
                    <Link href='#'>
                        Forgot Password?
                    </Link>
                </Typography>
                <hr></hr>
                <Typography align='center'>
                    Don't have an account? <Link href="/signup"> Sign up here. </Link>
                </Typography>
            </Grid>
        </Paper>
        <Footer />
    </Grid>
  )
}

export default Login;

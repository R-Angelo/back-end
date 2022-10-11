import React from "react";

// Tools
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//Components
import LoginHeader from './LoginHeader'
import Footer from "./Footer";

//icons
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const SignUp = () =>{
    const paperStyled = {
        padding: 20, height: '70vh', width: 500, margin: '100px auto'
    }
    const btnStyle={
        marginBottom: 10
    }

    const h2Style = {
        margin:'10px 0 0 0'
    }

    const txtFieldStyle = {
        margin: '0 0 10px 0 '
    }
    return (
        <>
        <LoginHeader />
            <Grid>
        <Paper elevation={6} style={paperStyled}>
            <Grid align='center'>
                <Avatar >
                    <PersonAddAltIcon />
                </Avatar>
                <h2 style={h2Style}>Sign Up</h2>
                <Typography variant="caption">
                Please fill up this form to sign up.
                </Typography>
            </Grid>
            <Grid>
                <form>
                    <TextField variant="outlined" id="name" placeholder="Name" fullWidth required style={txtFieldStyle}/>
                    <TextField variant="outlined" id="email" placeholder="Email" fullWidth required style={txtFieldStyle}/>
                    <FormControl>
                        <FormLabel id="gender">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender"
                            name="gender"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            {/* palatandaan kung pano mag disable ng radiobutton */}
                            {/* <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="other"
                            /> */}
                        </RadioGroup>
                    </FormControl>
                    <TextField variant="outlined" id="phoneNum" placeholder="Phone number" fullWidth required style={txtFieldStyle}/>
                    <TextField variant="outlined" id="password" placeholder="Password" fullWidth required style={txtFieldStyle} />
                    <TextField variant="outlined" id="confirmPassword" placeholder="Confirm Password" fullWidth required style={txtFieldStyle} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />
                    <Button variant='contained' fullWidth style={btnStyle}>Sign Up</Button>
                    <hr></hr>
                    <Typography align='center'>
                        Already have an account? <Link href="/login"> Sign in</Link>
                    </Typography>
                </form>
            </Grid>
        </Paper>
    </Grid>
    <Footer />
        </>
    )
}

export default SignUp
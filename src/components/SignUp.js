import React, { useState } from "react";

// Tools
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//Components
import LoginHeader from './LoginHeader'

//icons
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const SignUp = () =>{

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [password, setPassword] = useState();
    const [cpass, setCPass] = useState();

    // Error
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [phoneNumError, setPhoneNumError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [cpassError, setCPassError] = useState();

    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setName(false)
        setEmail(false)
        setPhoneNum(false)
        setPassword(false)
        setCPass(false)

        if( name == ''){
            setNameError(true)
        }
        if( email == ''){
            setEmailError(true)
        }
        if( phoneNum == ''){
            setPhoneNumError(true)
        }
        if( password == ''){
            setPasswordError(true)
        }
        if( cpass == ''){
            setCPassError(true)
        }


        if (name && email && phoneNum && password && cpass){
            console.log(name, email, gender, phoneNum, password, cpass)
        }
    }

    const paperStyled = {
        padding: 20, height: '70vh', width: 500, margin: '100px auto', color: "black" 
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
                <form onSubmit={handleSubmit}>
                    <TextField 
                        variant="outlined" 
                        label='Name' 
                        id="name" 
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        error={nameError}
                        required 
                        style={txtFieldStyle} />
                    <TextField 
                        variant="outlined" 
                        label='Email' 
                        id="email" 
                        fullWidth 
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                        required 
                        style={txtFieldStyle}/>
                    <FormControl>
                        <FormLabel id="gender">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => {setGender(e.target.value)}}
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
                    <TextField 
                        variant="outlined" 
                        label='Phone number' 
                        id="phoneNum" 
                        fullWidth 
                        onChange={(e) => setPhoneNum(e.target.value)}
                        error={phoneNumError}
                        required 
                        style={txtFieldStyle}/>
                    <TextField 
                        variant="outlined" 
                        label='Password' 
                        id="password" 
                        fullWidth 
                        onChange={(e) => setPassword(e.target.value)}
                        error={passwordError}
                        required 
                        style={txtFieldStyle} />
                    <TextField 
                        variant="outlined" 
                        label='Confirm Password' 
                        id="confirmPassword" 
                        fullWidth
                        onChange={(e) => setCPass(e.target.value)}
                        error={cpassError} 
                        required 
                        style={txtFieldStyle} />
                    <FormControlLabel control={<Checkbox required/>} label="I accept the terms and conditions"/>
                    <Button type="submit" variant='contained' fullWidth style={btnStyle}>Sign Up</Button>
                    <hr></hr>
                    <Typography align='center'>
                        Already have an account? <Link href="/login"> Sign in</Link>
                    </Typography>
                </form>
            </Grid>
        </Paper>
    </Grid>
        </>
    )
}

export default SignUp

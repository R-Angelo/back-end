import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from 'firebase/firestore'
import {auth, db} from '../firebase-config'

// Tools
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography, Link, Alert } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//Components
import LoginHeader from './LoginHeader'

//icons
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Footer from "./Footer";

function SignUp() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNum, setPhoneNum] = useState(0);
    const [cpass, setCPass] = useState('');

    const userCollectionRef = collection(db, "users");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            alert(user)
            await addDoc(userCollectionRef, {name: name, email: registerEmail, gender: gender, phoneNumber: phoneNum, password: registerPassword })
        } catch (e) {
            console.log(e.message);
        }
    }

    const signUp = async () => {

    }

    

    // Error
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [phoneNumError, setPhoneNumError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [cpassError, setCPassError] = useState();
    

    async function handleSubmit(e) {
        

        setName(false)
        registerEmail(false)
        setPhoneNum(false)
        registerPassword(false)
        setCPass(false)

        if( name == ''){
            setNameError(true)
        }
        if( registerEmail == ''){
            setEmailError(true)
        }
        if( gender == ''){
            setEmailError(true)
        }
        if( phoneNum == ''){
            setPhoneNumError(true)
        }
        if( registerPassword == ''){
            setPasswordError(true)
        }
        if( cpass == ''){
            setCPassError(true)
        }


        if (name && registerEmail && gender && phoneNum  && registerPassword && cpass){
            console.log(name, registerEmail, gender, phoneNum, registerPassword, cpass)
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
                <form>
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
                        type='email' 
                        label='Email' 
                        id="email" 
                        fullWidth 
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        error={emailError}
                        required 
                        style={txtFieldStyle}/> 
                    <FormControl>
                        <FormLabel id="gender" 
                        >Gender</FormLabel>
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
                        type='number'
                        variant="outlined" 
                        label='Phone number' 
                        id="phoneNum"
                        fullWidth 
                        onChange={(e) => setPhoneNum(e.target.value)}
                        error={phoneNumError}
                        required 
                        style={txtFieldStyle}/>
                    <TextField 
                        type='password'
                        variant="outlined" 
                        label='Password' 
                        id="password" 
                        fullWidth 
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        error={passwordError}
                        required 
                        style={txtFieldStyle} />
                    <TextField 
                        type='password'
                        variant="outlined" 
                        label='Confirm Password' 
                        id="confirmPassword" 
                        fullWidth
                        onChange={(e) => setCPass(e.target.value)}
                        error={cpassError} 
                        required 
                        style={txtFieldStyle} />
                    <FormControlLabel control={<Checkbox required/>} label="I accept the terms and conditions"/>
                    <Button variant='contained' fullWidth style={btnStyle} 
                    onClick={register}
                    >
                        Sign Up
                    </Button>
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

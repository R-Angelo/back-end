import React, { useContext, useEffect, useState } from 'react'
import { auth, fs } from '../firebase'
import { collection, setDoc } from "firebase/firestore"; 

const Authcontext = React.createContext()

export function useAuth(){
    return useContext(Authcontext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()
    // 
    const signup = async (name, email, phoneNum, password, gender) => {
        try {
            // auth createuserwithemailandpassword for AUTHENTICATION LOGIN ONLY
          const res = await auth.createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;
          //setDOC function to input data to firestore
          await setDoc(collection(fs, "users"), {
            uid: user.uid,
            name,
            email,
            phoneNum,
            password,
            gender
          });
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };


      //onAuthCHANGE if user not null continue to dashboard, if user null stay on login
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
        <Authcontext.provider value={value}>
            {children}
        </Authcontext.provider>
    )
}

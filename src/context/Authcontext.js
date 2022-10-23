import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const Authcontext = React.createContext()

export function useAuth(){
    return useContext(Authcontext)
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState()

    function signup(name, email, phonenum, password, gender){
        return auth.createUserWithEmailAndPassword(name, email, phonenum, password, gender)
    }

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
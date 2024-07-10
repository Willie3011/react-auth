import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsub
    }, [])

    function signup(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const value = {
        currentUser,
        signup
    }
  return (
      <AuthContext.Provider value={value}>
          {children}
    </AuthContext.Provider>
  )
}

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.init'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova'


export const AuthContext = createContext(null)

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loder, setLoder] = useState(true)

  // create User
  const createUser = (email, password) => {
    setLoder(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login User
  const loginUser = (email, password) => {
    setLoder(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // google popup and login
  const googlePopupLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)
  }

  //signOut
  const signout = () => {
    return signOut(auth)
  } 

  const authInfo = {
    user,
    setUser,
    loder,
    createUser,
    loginUser,
    googlePopupLogin,
    signout
  }



  //onAuthStateChange
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoder(false)
    });
    return ()=>{
          unsubscribe();  
    }
  },[])   




  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvaider

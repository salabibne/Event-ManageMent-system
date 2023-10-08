import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.config";


export const context_codeSal = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Context =({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const Logout = ()=>{
        return signOut(auth)
       
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(user)=>{
             console.log("current State Change",user)
             setUser(user)
             setLoading(false)
         })
         return ()=>{
             unSubscribe()
         }
     },[])


    const values ={
        user,createUser,signIn,GoogleLogin,loading,Logout
    }
    

    return (
        <div>
            <context_codeSal.Provider value={values}>
            {children}
            </context_codeSal.Provider>
        </div>
    );
};


export default Context;








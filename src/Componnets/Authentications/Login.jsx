import {  useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const capital =/[A-Z]/;
    const special_character=/[@#$%^&+=!(){}[\]<>?|]/;
    const [error,setError]=useState('')
    const [showpassword,setshowpassword]=useState(false)
    
    const handleRegister = e =>{
        setError('')
        e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email,password)

        // check error of userInputs
        if(password.length<6){
            setError("password length can not be less than 6 ")
            return
        }
        if(!(capital.test(password))){
            setError("use capital letter in your password")
            return
        }

        if(!(special_character.test(password))){
            setError("use special character (@#$%^&*~!) in your password")
            return
        }
        
        

    }
   
    return (
        
        <div className="hero min-h-screen ">
            
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleRegister}  className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" 
                            
                            required />
                            <button className="absolute top-44 right-10 font-bold text-violet-600" onClick={()=>setshowpassword(!showpassword)}>{showpassword ?"hidden":"show"}</button>
                            
                            
                        </div>
                        <div className="form-control mt-6">
                        
                            <button className="btn btn-primary">Login</button>
                            {
                                error && <p className="text-red-600 font-bold m-2">{error}</p>
                            }
                            <p className="text-red-600 mt-2 text-lg">Not Register ? <Link className="btn" to="/register">Register</Link></p>

                        </div>
                       
                    </form>
                  
                </div>
            </div>
          
            <ToastContainer></ToastContainer>
        </div>
        
        
    );
};

export default Register;
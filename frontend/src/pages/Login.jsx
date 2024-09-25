import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"


const Login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [message, setMessage] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/user/login", {email, password});
            const {token, role, message} = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role)
            setToken(token);
            setRole(role);
            setMessage(message);

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have successfully logged in!",
            });
            
            if(role === 'admin'){
                navigate('/admin')
            }
            else if(role === 'user'){
                navigate('/')
            }
            
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response?.data?.message || "Invalid credentials. Please try again.",
            })
        }
    }




    return(
        <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>{message}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
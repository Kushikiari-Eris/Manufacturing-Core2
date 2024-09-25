import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const Register = () =>{

    const [user, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/user/register", {username, email, mobile, password})
        .then(() => {
            setUsername('')
            setEmail('')
            setMobile('')
            setPassword('')
            Swal.fire({
                icon: "success",
                title: "User Created Successfully",
            });
            navigate('/login')
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Failed Creation",
                text: error.response?.data?.message || "Email Already Exist",
            })
        })
    }

    return(
        <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Username" className="input input-bordered" value={username} onChange={(e) => setUsername(e.target.value)}  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input type="text" placeholder="Mobile" className="input input-bordered" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;
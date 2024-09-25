import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({ toggleSidebar }) =>{

    const isUserSignedIn = !!localStorage.getItem('token')
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }



    return(
        <>
            <nav className=" fixed top-0 z-50 w-full bg-white border-b   ">
                <div className="flex flex-wrap justify-between items-center   p-4">
                <button onClick={toggleSidebar} type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="flex flex-shrink-0 items-center ">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                    </div>
                    </a>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <button type="button" className="relative rounded-full bg-gray-400 p-1 text-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-gray-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            { isUserSignedIn ? (
                                <>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/'>Profile</Link></li>
                                <li><Link to='/'>Settings</Link></li>
                                <li><button onClick={handleSignOut}>Log Out</button></li>
                                </>
                            ) : (
                                <>
                                <Link to='/Login'><li>Login</li></Link>
                                <Link to='/signup'><li>SignUp</li></Link>
                                </>
                            ) }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;
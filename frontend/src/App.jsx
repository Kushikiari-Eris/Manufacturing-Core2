import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './ecommerce/Product'

function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  const userRole = localStorage.getItem('role')

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product' element={<Product/>}/>

       {/* Admin route protection */}
       {isUserSignedIn && userRole === 'admin' ? (
          <Route path='/admin' element={<Admin />} />
        ) : (
          <Route path='/admin' element={<Navigate to="/" />} />
        )}

        {/* Fallback routes based on login status */}
        <Route 
          path='*' 
          element={isUserSignedIn 
            ? (userRole === 'admin' 
                ? <Navigate to="/admin" /> 
                : <Navigate to="/" />
              ) 
            : <Navigate to="/login" />} 
        />

      </Routes>
    </>
  )
}

export default App

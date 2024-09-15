import './index.css'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App

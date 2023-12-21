import React, { useEffect } from 'react'
import AuthSlice from './Store/AuthSlice'
import { login,logout } from './Store/AuthSlice'
import authServices from './Appwrite/Auth/Auth'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer'
import Login from './componets/Login.jsx'
const App = () => {
    const [Loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
      authServices.getCurrentuser().then((UserData)=>{
          if(UserData){
            dispatch(login({UserData}))
          }else{
            dispatch(logout)
          }
        }).finally(()=> setLoading(false))
         
    },[])
    return !Loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-60'>
      <div className='w-full block'>
        <Header />
        <main className='min-h-screen'>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
  }

export default App
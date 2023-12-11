import React from 'react'
import authServices from '../../Appwrite/Auth/Auth'
import { logout } from '../../Store/AuthSlice'
import { useDispatch } from 'react-redux'
const LogoutBtn = () => {
    const displatch  = useDispatch()
    const logouthandler=()=>{
        authServices.logout().then(()=>{
            displatch(logout())
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <button className='px-2 py-1.5 bg-green-500 text-white rounded-lg justify-center items-center shadow-md duration-200 active:scale-90' onClick={logouthandler}>LogOut</button>
  )
}

export default LogoutBtn
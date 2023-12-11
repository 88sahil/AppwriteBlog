import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import AuthSlice from '../../Store/AuthSlice'
import Logo from '../Logo/Logo'
import Container from '../container/Container'
import '../../App.css'
import Logoutbtn from './LogoutBtn'
import LogoutBtn from './LogoutBtn'
const Header = () => {
  const authstatus  = useSelector((state)=>state.auth.Status)
  const Navigate = useNavigate();
  const navItems =[
    {
      name:"Home",
      slug:"/",
      active:true
    },
    {
      name:"sign In",
      slug:"/Login",
      active:!authstatus
    },
    {
      name:"sign Up",
      slug:"/signup",
      active: !authstatus
    },
    {
      name:"All Post",
      slug:"/all-post",
      active:authstatus
    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authstatus
    }
  ]
  return (
      <header className='header py-3 shadow w-full'>
          <nav className=' flex justify-between items-center px-3'>
            <div className='flex'>
              <Logo/>
            </div>
            <div>
              {/* header navs */}
            <ul className='flex gap-8 text-lg font-bold mr-16 items-center'>
              {
                navItems.map((item,index)=>{
                  return(
                    item.active ? (
                      <li key={index}><button onClick={()=>Navigate(item.slug)}>{item.name}</button></li>
                    ):null
                  )
                })
              }{
                authstatus && (
                  <li>
                      <LogoutBtn/>
                  </li>
                )
              }
            </ul>
            </div>
          </nav>
      </header>
  )
}

export default Header
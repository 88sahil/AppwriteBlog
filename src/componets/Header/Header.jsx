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
          <nav className=' flex flex-wrap justify-between max-sm:justify-center items-center px-3 max-sm:gap-6'>
            <div className='flex max-sm:w-full justify-center'>
                 <Logo/>
            </div>
            <div>
              {/* header navs */}
            <ul className='flex gap-8 text-lg font-bold  items-center max-sm:text-sm sm:gap-4 sm:mr-7 max-sm:mt-4'>
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
import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Buttion from '../Buttion'
const Footer = () => {
  return (
    <footer className='border-t border-black/40 p-4 bg-green-50'>
      <section className='flex justify-between flex-wrap mt-2'>
      <div className='order-1 max-sm:w-full flex justify-center max-sm:flex-col items-center'>
        <Logo/>
        <p className='font-bold font-mono mt-12 max-sm:text-center'>Maliya's It solution</p>
      </div>
      <div className='order-2 max-sm:w-full items-center flex flex-col p-3'>
          <ul className='font-bold'>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
          </ul>
      </div>
      <div className='font-bold order-3 max-sm:w-full items-center flex flex-col'>
        <p>sahilmaliya59@gmail.com</p>
        <p>+91 xxxxxxxxxx</p>
        <p>rajkot,Gujarat</p>
      </div>
      </section>
    </footer>
  )
}

export default Footer
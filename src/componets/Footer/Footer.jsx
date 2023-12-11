import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Buttion from '../Buttion'
const Footer = () => {
  return (
    <footer className='border-t border-black/40 p-4 bg-green-50'>
      <section className='flex justify-between flex-wrap mt-2'>
      <div>
        <Logo/>
        <p className='font-bold font-mono mt-12'>Maliya's It solution</p>
      </div>
      <div>
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
      <div className='font-bold'>
        <p>sahilmaliya59@gmail.com</p>
        <p>+91 xxxxxxxxxx</p>
        <p>rajkot,Gujarat</p>
      </div>
      </section>
    </footer>
  )
}

export default Footer
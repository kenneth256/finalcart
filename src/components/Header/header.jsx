import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'> 
        <Link to="/"> 
          <div className='ml-5'>
            <h1 className='text-red-900 font-bold text-xl sm:text-2xl'>REACT REDUX SHOPPING CART</h1> 
            </div>
        </Link>
        
        <ul className='flex items-center list-none space-x-6 text-gray-800 font-semibold mr-5'>
            <Link to='/'>
            <li className='cursor-pointer'>
                Home
            </li>
            </Link>
            <Link to='/cart'>
            <li className='cursor-pointer'>
            Cart
            </li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header

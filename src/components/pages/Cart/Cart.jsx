import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTile from '../../Cart-tile/CartTile'

CartTile

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0)
  const {cart} = useSelector(state => state)

  useEffect(()=> {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0 ))
  }, [cart])
  console.log(cart, totalCart)
  return (
    <div>
      {
        cart && cart.length > 0 ? <div className='min-h-[80vh] grid sm:grid-cols-2 mx-w-6xl mx-auto'>
          <div className='flex flex-col justify-center items-center p-3'>{
          cart.map(item => {
            return <CartTile productItem={item}  key={item.id} />
          })
        }</div>
        <div className='flex flex-col ml-10 items-end p-5 space-y-5 mt-5'>
          <h1 className='font-bold text-lg  text-red-800'>Your cart Summary</h1>
          <p><span className='text-gray-800 font-bold'>Total items: </span><span>{cart?.length}</span></p>
          <p><span className='text-gray-800 font-bold'>Total Amount: </span><span>{totalCart}</span></p>
        </div>
        </div> : <div className='h-[80vh] flex flex-col justify-center items-center  '>
          <h1 className='text-gray-800 mb-2 text-2xl font-bold'>Cart is empty</h1>
          <Link to={'/'}>
          <button className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>SHOP NOW</button>
          </Link>
          </div>
      }
    </div>
  )
}

export default Cart

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/cart-slice';



const Product = ({product}) => {

    const {cart} = useSelector(state => state);

    const dispaatch = useDispatch();
function handleAddToCart(){
    dispaatch(addToCart(product))
}
const handleRemoveCart =() => {
    console.log('removed')
    dispaatch(removeFromCart(product))
}
  return (
    <div>
    <div className='border-red-900 border-2 gap-3 p-4 h-[360px] group flex mt-10 ml-5
     flex-col items-center shadow-lg rounded-xl'>
      <div className='h-[180px]'>
        <img  src={product?.image} alt={product?.name} className='object-cover h-full w-full'/>
      </div>
      <div>
        <div>
        <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{product?.title}</h1>
        </div>
        <div className='flex flex-col items-center justify-center w-full mt-3 '>
            <p>{product?.price}</p>
            <button onClick={cart.some(item => item.id === product.id) ? handleRemoveCart : handleAddToCart} className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>{
                cart.some(item => item.id === product.id) ? 'Remove From Cart' : 'Add to Cart'
                }</button>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default Product

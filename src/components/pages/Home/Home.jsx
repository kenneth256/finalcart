import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import Product from '../../Product/Product';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch ('https://fakestoreapi.com/products');
      const data = await response.json(); 
      if(data && data.length > 0) {
        setLoading(false);
        setProducts(data);
      }
    
  
    } catch (error) {
      console.error(error);
      
      
    }
  }

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <div>
      {
        loading ? <div className='min-h-screen w-full flex justify-center items-center'>
          <Circles  height={'120'} width={'120'}  color="rgba(127,29,29)" visible={true}/>
        </div> : <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3  '>
          {
            products && products.length >0  && products.map((product, index) => (
              <div key={product.id}>
                <Product product={product} />

              </div>
            ) )
          }
        </div>
      }
    </div>
  )
}

export default Home

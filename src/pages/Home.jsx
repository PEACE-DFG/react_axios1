import React from 'react'
import Index from '../component/Index.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [products, setProducts] = useState([]);
  function fetchProducts() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products)
        console.log(response.data.products)
      });

  } useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div>
      <div className='container'>
        <div>
          {
            (products.length > 0) ?
              products.map((value, index) => {
                return (
                  <div key={index}>
                    <Index {...value} />

                  </div>
                )
              }) : <h2> Product is loading...</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'

const Products = () => {

  const [products, setProducts] = useState()
  const fetchProducts = async () => {

    try {
      const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/')
      const products = await response.json();
      setProducts(products)

      if(!response.ok) {
        throw new Error('Could not fetch the data')} 
    } catch (error) {
      setDefaultResultOrder(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  },[])

  const productList = (products) => {
    products!=null
        ? products.map ((product) =>
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <i>{product.stock}</i>
          <i>{product.category}</i>
          <img src={product.image} alt="" />
        </div>
        ) : <div>Error :c</div>
  }

  return (
    <>
      {productList(products)}
    </>
  )
}

export default Products
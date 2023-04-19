import React, { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {Body, ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'
import Product from '../components/Product';


const Products = ({addToCart, testing}) => {

  const [products, setProducts]       = useState()
  // const [products, setProducts]       = useOutletContext()
  const [quantity, setQuantity]       = useOutletContext()
  const [cartContent, setCartContent] = useState([])
  // const [quantity, setQuantity]       = useState(1)

  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/')
      const products = await response.json();
      setProducts(products)
      return products
 
    } catch (error) {
      setDefaultResultOrder(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])
    
    return (
      <>
        <Body>
          { products!=null 
              ? products.map((product) => 
                <Product 
                  key={product['_id']}
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  addToCart={addToCart}
                  /> 
               )
              : <div>Error :c</div>
          
          }
        </Body>
      </>
  )
}

export default Products

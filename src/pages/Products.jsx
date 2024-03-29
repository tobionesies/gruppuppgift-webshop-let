import React, { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {Body, StyledLoading} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'
import Product from '../components/Product';


const Products = ({addToCart}) => {

  const [products, setProducts]       = useState()
  const [quantity, setQuantity]       = useOutletContext()

  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-728d.up.railway.app/products/')
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
      <div>
          <Body>
            { products!=null 
                ? products.map((product) => 
                <motion.div
                  animate={{ opacity: [0, 0.5, 0.75, 1] }}
                  initial={{ opacity: [0, 0.5, 0.75, 1] }}
                  transition={{
                    duration:2
                  }}>
                <Product 
                key={product['_id']}
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
                addToCart={addToCart}
                /> 
                </motion.div>
                )
                : <StyledLoading></StyledLoading>
                
              }
          </Body>
      </div>
  )
}

export default Products

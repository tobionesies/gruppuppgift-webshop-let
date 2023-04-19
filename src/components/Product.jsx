import React, { useState } from 'react'
import {ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'
import { Link, useOutletContext } from 'react-router-dom'

const Product = (product, quantity, setQuantity) => {
  const [cartContent, setCartContent] = useOutletContext();

  [quantity, setQuantity] = useState(1)

  const addToCart = (product) => {

        const duplicate = cartContent.find(item => item.id === product.id);
        if (duplicate) {
          const updatedItem = {
            ...duplicate, 
            quantity: duplicate.quantity + product.quantity, 
            price: duplicate.price + product.price
          }
          console.log("undefined? "+duplicate.quantity)
          const theUpdatedCart = cartContent.map(item => item.id === duplicate.id ? updatedItem : item)
          setCartContent(theUpdatedCart)
        } else {
          setCartContent([
            ...cartContent,
            product
          ])
        }
  }
        
  const handleChange = (e) => {
    console.log(e.target.value)
      e.preventDefault();
      setQuantity(e.target.value)

      if (e.target.value == "") {
        setQuantity(1)
      }
    }

  return (
    <ProductElement  >
      <motion.div
        transition={{
          duration:2,
          type:"spring",
          stiffness: 200
        }}
        whileHover={{ scale:1.1 }}
      >
      <img src={product.product.image} alt="BILD" />
      </motion.div>
      <h3>{product.product.title}</h3>
      <i>{product.product.category}</i>
      <div className='info'>
        <h4>${product.product.price}</h4>
        <p>In stock</p>
        <input name="quantity" placeholder='1' value={product.product.quantity} type="text" onChange={handleChange} />
        <Link to={"/" + product.product['_id']}>Description</Link>
        <Button onClick={() => { addToCart({
          id: product.product._id,
          title: product.product.title,
          image: product.product.image,
          price: product.product.price,
          quantity: quantity,
        })}}>
            Add to cart
        </Button>
    
      </div>
      {/* ^ Ska ersättas med routing Link */}
    </ProductElement>
  )
  
}

export default Product
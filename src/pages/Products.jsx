import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
// import "../components/Cart"
import {Body, ProductElement, Button} from '../components/styled/StyledComponents';
import { motion } from 'framer-motion'


const Products = () => {

  const [products, setProducts]       = useState()
  const [cartContent, setCartContent] = useState([])
  const [quantity, setQuantity]       = useState(1)
        // [cartToggle, setCartToggle]   = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products/')
      const products = await response.json();
      setProducts(products)
      return products

      // if(!response.ok) {
      //   throw new Error('Could not fetch the data')} 
    } catch (error) {
      setDefaultResultOrder(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value)

    if (e.target.value == "") {
      setQuantity(1)
    }

  }

  const addToCart = (product) => {
    setCartContent([
      ...cartContent,
      product
    ])
      console.log(cartContent)
    }
    
    // const total = cartContent.reduce((result, currentProduct) => {
    //   return result += currentProduct.price * currentProduct.quantity;
    // }, 0)

    // const cartToggle = false;
    // console.log("Is it false or true?" + cartToggle)

    // const cartTable = () => {
    //   return cartToggle != true
    //     ? <div></div>
    //     : <div>
    //         <table className='cartTable'>
    //           <thead>
    //             <tr>
    //               <th></th>
    //               <th>Title</th>
    //               <th>Quantity</th>
    //               <th>Price</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //           {
    //             cartContent.map(item =>
    //               <tr key={item.id}>
    //                 <td><img src={item.image} alt="" className='cartImage'/></td>
    //                 <td>{item.title}</td>
    //                 <td>{item.quantity}</td>
    //                 <td>${item.price}</td>
    //               </tr>)
    //           }
    //           </tbody>
    //           <tfoot>
    //             <tr>
    //               <td>Total: ${total}</td>
    //             </tr>
    //           </tfoot>
    //         </table>
    //   </div>
    // }
    
    return (
      <>
        {/* {cartTable} */}
        <Body>
          { products!=null 
              ? products.map((product) => 
                <ProductElement key={product['_id']}>
                  <motion.div
                  
                  transition={{
                  duration:2,
                  type:"spring",
                  stiffness: 200
                  }}

                  whileHover={{
                    scale:1.1,
                  }}
                    
                  
                  >
                  <img src={product.image} alt="BILD" />
                  </motion.div>
                    <h3>{product.title}</h3>
                    <i>{product.category}</i>
                  <div className='info'>
                    <h4>${product.price}</h4>
                    <p>In stock</p>
                    <input name="quantity" placeholder='1' value={product.quantity} type="text" onChange={handleChange} />
                  <Link to={"/"+ product['_id']}>Description</Link>
                  <Button onClick={(e) => { addToCart({
                      id: product._id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      quantity: quantity,
                      })
                    }}>Add to cart</Button>
                
                  </div>
                  {/* ^ Ska ersättas med routing Link */}
                </ProductElement>)
              : <div>Error :c</div>
          }
        </Body>
      </>
  )
}

export default Products

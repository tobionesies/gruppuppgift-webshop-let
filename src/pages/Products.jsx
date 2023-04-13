import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
// import "../components/Cart"
import {Body, ProductElement, Button} from '../components/styled/StyledComponents';


const Products = () => {


  const [products, setProducts] = useState()
  const [cartContent, setCartContent] = useState([])

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

  const addToCart = (product) => {
    setCartContent([
      ...cartContent,
      product
    ])
      console.log(cartContent)
  }


  return (
    <>
    <div>
      <ul>
        {
          cartContent.map(item =>
            <li key={item._id}>
              <img src={item.image} alt="" />
              {item.title}
              {item.price}
            </li>
          )
        }
      </ul>
    </div>
    <Body>
      { products!=null 
          ? products.map((product) => 
            <ProductElement key={product['_id']}>
              <img src={product.image} alt="BILD" />
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <p>{product.stock}</p>
              <i>{product.category}</i>
              <Button onClick={() => { addToCart({title: product.title,image: product.image,price: product.price})}}>Add to cart</Button>
              <Link to={"/"+ product['_id']}>Description</Link>
              {/* ^ Ska ersättas med routing Link */}
            </ProductElement>)
          : <div>Error :c</div>
      }
    </Body>
    </>
  )
}

export default Products
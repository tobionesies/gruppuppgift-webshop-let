import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Link, useParams } from 'react-router-dom'
// import "../components/Cart"
import {Body, ProductElement, Button} from '../components/styled/StyledComponents';


const Products = () => {

  const [products, setProducts] = useState()
  const [cartContent, setCartContent] = useState()

  const params = useParams();



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
    const prod = {title: product.title, image: product.image, price: product.price}
    setCartContent([...cartContent,
                    prod
      ])
      console.log(prod)
    // setCartContent(product.title, product.price)
    // e.preventDefault();
    // setCartContent(target._id)
    // console.log('https://product-api-production-5f7f.up.railway.app/products/' + params._id)
  }


  // const Cards = ({item, handleClick}) => {
  //   const {
  //     title,
  //     price,
  //     image,
  //   } = item
  // }


  return (
    <>
    <div>
      <ul>
        {
          // cartContent.map((item) =>{

          // })
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
              <Button onClick={() => { addToCart(product)}}>Add to cart</Button>
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
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'


const Products = () => {

  const [products, setProducts] = useState()

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

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;`

  const Body = styled.div`
  display: flex;
  gap: 20px;
  `  

  const ProductElement = styled.div`
  display: flex;
  background: wheat;
  padding: 20px 50px;
  flex-direction: row;
  flex-wrap: wrap;

  img{
    margin: 20px;
    width: 180px;
    height: 170px;
    border: red 1px solid;
  }

  h3{
      font-size: 24px;
      display: block;
      width: 100%;
  }

  p{
    font-size: 19px;
  }
  `


  return (
    <Body>
      { products!=null 
          ? products.map((product) => 
            <ProductElement key={product['_id']}>
              <img src={product.image} alt="BILD" />
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <p>{product.stock}</p>
              <i>{product.category}</i>
              <Button>Add to cart</Button>
              <a href="">Description</a> 
              {/* ^ Ska ersättas med routing Link */}
            </ProductElement>)
          : <div>Error :c</div>
      }
    </Body>
  )
}

export default Products
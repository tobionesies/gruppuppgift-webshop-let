import React from 'react'

const Products = () => {

const fetchProducts = async () => {

  try {
    const response = await fetch ('https://product-api-production-5f7f.up.railway.app/products')
    const data = await response.json();
    if(!response.ok) {
      throw new Error('Could not fetch the data')} 
  } catch (error) {
    setDefaultResultOrder(error.message)
  }
}

  const productList = ({data}) => {
    data!=null
        ? data.map ((product) =>
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
      {productList(data)}
    </>
  )
}

export default Products
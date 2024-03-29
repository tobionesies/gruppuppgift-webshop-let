import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledForm, StyledBackButton } from '../../components/styled/StyledForms';

const CreateProduct = () => {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    title:'',
    description: '',
    price:undefined,
    stock:undefined,
    category:'',
    image:''
  })

  const handleChange = (e) => {
    e.preventDefault();
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://product-api-production-728d.up.railway.app/products/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            title:       newProduct.title,
            description: newProduct.description,
            price:       newProduct.price,
            stock:       newProduct.stock,
            category:    newProduct.category,
            image:       newProduct.image
          })
      }); 
      navigate("/manage-products")
    } catch(error) {

    }}

  return (
    <div>
      <div>
        <Link to="/manage-products">
          <StyledBackButton>&#60; Back</StyledBackButton>
        </Link>
      </div>
    
      <StyledForm onSubmit={handleSubmit}>
        <h2>Create product</h2>
        <h3>Title</h3>
        <input name='title' type="text" onChange={handleChange} />
        <h3>Description</h3>
        <input name='description' type="text" onChange={handleChange} />
        <h3>Price</h3>
        <input name='price' type="text" onChange={handleChange} />
        <h3>Stock</h3>
        <input name='stock' type="text" onChange={handleChange} />
        <h3>Category</h3>
        <input name='category' type="text" onChange={handleChange} />
        <h3>Image</h3>
        <input name='image' type="text" onChange={handleChange} />
        <br />
        <br />
        <input type="submit" className='submitButton' value='Create' />
      </StyledForm>
    </div>
  )
}

export default CreateProduct
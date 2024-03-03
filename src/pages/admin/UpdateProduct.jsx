import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { StyledUpdateForm, StyledBackButton } from '../../components/styled/StyledForms';


const UpdateProduct = () => {
  const [product, setProduct] = useState({
    title: "", 
    description: "", 
    price: 0, 
    stock: 0, 
    category: "",
    image: "",
    });

  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await fetch (`https://product-api-production-728d.up.railway.app/products/${params.id}`)
      
      const product = await response.json();
      setProduct(product)

      return product

    } catch (error) {
      setDefaultResultOrder(error.message)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://product-api-production-728d.up.railway.app/products/${params.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            title:       product.title,
            description: product.description,
            price:       product.price,
            stock:       product.stock,
            category:    product.category,
            image:       product.image
          })
      });
      navigate("/manage-products")

    } catch(error) {
        console.log(error)
    }
  }

  return (
    <div>
      <div>
        <Link to="/manage-products">
          <StyledBackButton>&#60; Back</StyledBackButton>
        </Link>
      </div>
      <div>
        <StyledUpdateForm action="" onSubmit={handleSubmit} >
          <h2>Update Product</h2>
          <h3>Title</h3>
          <input 
          name="title" 
          type="text"
          value={product.title} 
          onChange={handleChange}
          />
          <h3>Description</h3>
          <input
          name="description" 
          type="text"
          value={product.description} 
          onChange={handleChange}
          />
          <h3>Price</h3>
          <input
          name="price"
          type="text"
          value={product.price}
          onChange={handleChange}
          />
          <h3>Stock</h3>
          <input
          name="stock"
          type="text"
          value={product.stock}
          onChange={handleChange}
          />
          <h3>Category</h3>
          <input
          name="category" 
          type="text" 
          value={product.category}
          onChange={handleChange}
          />
          <h3>Image</h3>
          <input
          name="image" 
          type="text" 
          value={product.image}
          onChange={handleChange}
          />
          <br />
          <input type="submit" className='submitButton' value="Submit"/>
        </StyledUpdateForm>
      </div>
    </div>
  )
}

export default UpdateProduct
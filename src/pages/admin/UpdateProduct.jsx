import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const UpdateProduct = () => {
  const [product, setProduct] = useState(
    {title:"", 
    description:"", 
    price:0, 
    stock:0, 
    category:"",
    image:"",
    }
    );
  const params = useParams();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await fetch (`https://product-api-production-5f7f.up.railway.app/products/${params.id}`)
      // const response = await fetch (`https://product-api-production-5f7f.up.railway.app/products/642c145245ec5384f181f1e2`)
      const product = await response.json();
      setProduct(product)
      // console.log(product.title)

      return product
      // if(!response.ok) {
      //   throw new Error('Could not fetch the data')} 
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
    console.log(product)
    try {
      await fetch(`https://product-api-production-5f7f.up.railway.app/products/${params.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            title:product.title,
            description:product.description,
            price:product.price,
            stock:product.stock,
            category:product.category,
            image:product.image
          })
      });
      navigate("/manage-products")
    } catch(error) {
        console.log(error)
    }
  }

  return (
    <div>
      <h2>Update Product</h2>
      <form action="" onSubmit={handleSubmit} >
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
         <input type="submit" value="Submit"/>
      </form>

    </div>
  )
}

export default UpdateProduct
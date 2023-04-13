import React, {useState, useEffect} from 'react'
import { useFetcher, useParams } from 'react-router-dom';


const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch (`https://product-api-production-5f7f.up.railway.app/products/${params.id}`)
      // const response = await fetch (`https://product-api-production-5f7f.up.railway.app/products/642c145245ec5384f181f1e2`)
      const product = await response.json();
      setProduct(product)
      console.log(product.title)

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

  


  return (
    <div>
      <h2>Update Product</h2>
      <form action="" >
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
         <br />
         <input type="submit" value="Submit"/>
      </form>

    </div>
  )
}

export default UpdateProduct
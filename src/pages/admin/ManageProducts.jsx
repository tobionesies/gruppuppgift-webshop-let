import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const ManageProducts = () => {

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

  return (
    <>
      <Link to="/create-product/">
        <button>Create product</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { products!=null 
            ? products.map((product) => 
            <tr key={product['_id']}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>
                  <Link to={"/update-product/"+product['_id']}>
                    <button>Update</button>
                  </Link>
                  <button>Delete</button>
                </td>
                {/* ^ Ska ersättas med routing Link */}
              </tr>)
            : <div>Error :c</div>}
        </tbody>
      </table>
    </>
  )
}

export default ManageProducts
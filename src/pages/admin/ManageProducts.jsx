import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {StyledManageProducts} from '/src/components/styled/StyledManageProducts'


const ManageProducts = () => {

  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    try {
      const response = await fetch ('https://product-api-production-728d.up.railway.app/products/')
      const products = await response.json();
      setProducts(products)
      
      return products

    } catch (error) {
      setDefaultResultOrder(error.message)
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])

  const deleteProduct =  async (id) => {
    try{
      await fetch ('https://product-api-production-728d.up.railway.app/products/' + id, { 
      method:'DELETE',

    });
    setProducts(products.filter(product => id != product['_id']));

    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <StyledManageProducts>
        <Link to="/create-product/">
          <button className='create'>Create product</button>
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
                  <td className='tableData'>
                    <Link to={"/update-product/"+product['_id']} >
                      <button className='update' >Update</button>
                    </Link>
                    <button onClick={() => { deleteProduct(product['_id']) }} className='delete'>Delete</button>
                  </td>
                </tr>)
              : <div></div>}
          </tbody>
        </table>
      </StyledManageProducts>
    </>
  )
}

export default ManageProducts
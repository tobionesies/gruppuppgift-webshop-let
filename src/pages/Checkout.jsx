import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Checkout = () => {
const [cartContent, setCartContent] = useOutletContext();
const [checkout, setCheckout] = useState();

  const total = cartContent.reduce((result, currentProduct) => {
    return result += currentProduct.price;
  }, 0)


  const removeFromCart = (id) => {
    setCartContent(cartContent.filter(item => id != item.id));
  }

const handleQuantity = (item, btn) => {
    let currentPrice = item.price / item.quantity
    btn === "minus" 
    ? item.quantity <= 1
      ? setCheckout({
        ...cartContent, 
        quantity: item.quantity
      })
      : setCheckout({
        ...cartContent, 
        quantity: item.quantity--,
        price: item.price-=currentPrice
      })
    : setCheckout({
      ...cartContent, 
      quantity: item.quantity++,
      price: item.price+=currentPrice
    })
  }


  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        cartContent.map((item) =>
          <tr key={item.id}>
            <td><img src={item.image} alt="" className='cartImage'/></td>
            <td>{item.title}</td>
            <td>x{item.quantity}</td>
            <td>${item.price}</td>
            <td>
              <button onClick={() => { handleQuantity(item, "minus") }}>-</button>
              <button onClick={() => { handleQuantity(item, "plus") }}>+</button>
            </td>
            <td>
              <button onClick={() => { removeFromCart(item.id)}}>X</button>
            </td>
          </tr>)
      }
      </tbody>
      <tfoot>
        <tr>
          <td>Total: ${total}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Checkout
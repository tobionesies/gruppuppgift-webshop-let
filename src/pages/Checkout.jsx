import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import { StyledCheckoutTable } from '../components/styled/StyledCheckout';
import { StyledBackButton } from '../components/styled/StyledForms';

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

console.log(cartContent)
  return (
    cartContent.length >= 1
    ? <StyledCheckoutTable>
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
              <td>
                <button id='minusBtn' onClick={() => { handleQuantity(item, "minus") }}>-</button>
                  x{item.quantity}
                <button id='plusBtn' onClick={() => { handleQuantity(item, "plus") }}>+</button>
              </td>
              <td>${item.price}</td>
              <td>
                <button id='x-btn' onClick={() => { removeFromCart(item.id)}}>X</button>
              </td>
            </tr>)
        }
        </tbody>
        <tfoot>
          <tr>
            <td>Total: ${total}</td>
          </tr>
        </tfoot>
        <Link to="/"><button onClick={() => { setCartContent([])}}>Get ya stuff!</button></Link>
      </StyledCheckoutTable>
    : <div>
        <h1>The cart is empty, go back and add some stuff.</h1>
        <Link to="/">
          <StyledBackButton>&#60; Back to store</StyledBackButton>
        </Link>
      </div>
  )
}

export default Checkout
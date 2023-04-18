import React from 'react'
import Nav from '../components/Nav'
import {StyledHeader} from './styled/StyledHeader'
import Cart from './Cart'

const Header = ({cartToggle, setCartToggle, cartContent, setCartContent}) => {
  return (
    <StyledHeader>
      <Nav />
      <Cart 
        cartToggle={cartToggle} 
        setCartToggle={setCartToggle} 
        cartContent={cartContent}
        setCartContent={setCartContent}
      />
    </StyledHeader>
  )
}

export default Header
import React from 'react'
import Nav from '../components/Nav'
import {StyledHeader} from './styled/StyledHeader'
import Cart from './Cart'

const Header = ({cartToggle, setCartToggle, cartContent}) => {
  return (
    <StyledHeader>
      <Nav />
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} cartContent={cartContent}/>
    </StyledHeader>
  )
}

export default Header
import React from 'react'
import Nav from '../components/Nav'
import {StyledHeader} from './styled/StyledHeader'

const Header = (cartToggle, updateCartState) => {
  return (
    <StyledHeader>
      <Nav cartToggle={cartToggle}  updateCartState={()=> {updateCartState()}}/>
    </StyledHeader>
  )
}

export default Header
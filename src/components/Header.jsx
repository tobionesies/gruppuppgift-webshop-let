import React from 'react'
import Nav from '../components/Nav'
import {StyledHeader} from './styled/StyledHeader'

const Header = (cartToggle) => {
  return (
    <StyledHeader>
      <Nav cartToggle={cartToggle}/>
    </StyledHeader>
  )
}

export default Header
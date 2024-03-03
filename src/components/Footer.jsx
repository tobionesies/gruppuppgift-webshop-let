import React from 'react'
import {StyledFooter} from './styled/StyledFooter'


const Footer = () => {
  return (
    <div>
      <StyledFooter>
        <p className='footerInfo'><b>Solesoul</b> is brought to you by Team LET &#128151;</p>
        <div id="footer-content">
          <ul>
            <li>
              <h3>Hjälp & kontakt &#128222;</h3>
            </li>
            <li>FAQ</li>
            <li>Fakturabetalning</li>
            <li>Returnera en vara</li>
          </ul>
          <ul>
            <li>
              <h3>Om Solesoul &#128095;</h3>
            </li>
            <li>Kontakt</li>
            <li>Karriär</li>
            <li>Press</li>
          </ul>
          <ul>
            <li>
              <h3>Dina fördelar &#9996;</h3>
            </li>
            <li>Gratis leverans</li>
            <li>Gratis retur</li>
            <li>100 dagars öppet köp</li>
          </ul>
        </div>
      </StyledFooter>
    </div>
  )
}

export default Footer
import styled, { css } from 'styled-components'

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;`

export const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px;
background-color: white;
padding: 20px 0px 20px 20px;
/* margin-bottom: 20px; */
`  

export const ProductElement = styled.div`
display: flex;
background: #e2e2e2;
padding: 20px 50px;
flex-direction: row;
flex-wrap: wrap;
border-radius: 20px;

img{
  margin: 20px;
  width: 180px;
  height: 170px;
  /* border: red 1px solid; */
}

h3{
    font-size: 24px;
    display: block;
    width: 100%;
}

p{
  font-size: 19px;
}
`
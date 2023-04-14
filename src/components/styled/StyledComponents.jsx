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
padding: 20px 20px 20px 20px;
/* margin-bottom: 20px; */

@media screen and (max-width: 1060px) and (min-width: 816px)  {
    grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 815px) and (min-width: 521px)  {
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 520px) and (min-width: 0px)  {
    grid-template-columns: 1fr;
}
`  

export const ProductElement = styled.div`
display: flex;
min-width: 200px;
background: #e2e2e2;
padding: 20px;
flex-flow: row wrap;
border-radius: 20px;

img{
  margin: 10px auto;
  border: 20px solid white;
  border-radius: 10px;
  background-color: white;
  width: 180px;
  height: 150px;
  /* border: red 1px solid; */
}

.info{
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
}
//title
h3{
  font-size: 24px;
  margin-bottom: 0;
  display: block;
  width: 100%;
}
//category
i{
  margin-left: 0;
}
//price
h4{
  margin-bottom: 0;
}
//stock
p{
  margin-top: 0;
  font-size: 12px;
}
//description
a{
  margin-bottom: 15px;
}
//addToCartBtn
button:hover{
  background-color: black;
}
`
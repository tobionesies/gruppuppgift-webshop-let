import styled from 'styled-components'

export const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid var(--Dark-gray);
color: var(--Dark-gray);
font-weight: 700;
margin: 0 1em;
padding: 0.25em 1em;`

export const Body = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 20px;
background-color: var(--Baby-powder);
padding: 20px 20px 20px 20px;
/* margin-bottom: 20px; */

#loading {
  height: 1000px;
}

@media screen and (max-width: 1400px) and (min-width: 1024px)  {
    grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 1023px) and (min-width: 731px)  {
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 730px) and (min-width: 0px)  {
    grid-template-columns: 1fr;
    

}

`  

export const ProductElement = styled.div`
width:305px;
background: white;
margin: 0 auto;
padding: 20px;
flex-flow: row wrap;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

img{
  max-width:100%;
  align-content: center;
  margin: 10px auto;
  border: 1px solid white;
  margin-left:16px;
  border-radius: 10px;
  background-color: white;
  width: 269px;
  height: 246px;
}

.info{
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
}
//title
h3{
  color: #242424;
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
  color: var(--Vermilion)
}
//stock
p{
  margin-top: 0;
  font-size: 12px;
}
//description
a{
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 500;
  color: var(--Dark-gray)
}
//addToCartBtn
button {
  border-radius: 10px;
  padding: 5px;
}

button:hover{
  background-color: var(--Dark-gray);
  color: var(--Baby-powder);
}


`

export const StyledLoading = styled.div`  
        height: 540px;

`

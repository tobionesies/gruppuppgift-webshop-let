import styled, {css} from 'styled-components'
// import {StyledHeader} from './styled/StyledHeader'

export const StyledFooter = styled.footer`
background-color: var(--Dark-gray);
padding: 40px 60px;
height: 120px;
/* margin-top: 20px; */
margin: 0px 0px 150px 0px;

.footerInfo{
    color: white;
}

#footer-content{
    
    padding:10px 10px 10px 0px;
    display: flex;
    color: white;
    flex-direction: row;
    gap: 70px;
    
    /* justify-content: space-evenly; */
}

b {
    font-family: 'Righteous';
    font-weight: 500;
}

ul {
    margin-right: 100px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 300px;
    /* margin-right: 50px; */
}

li {
    margin: 10px 0px 10px 0px;
}

`
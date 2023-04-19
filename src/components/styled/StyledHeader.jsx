import styled, {css} from 'styled-components'

export const StyledHeader = styled.header`
background-color: var(--Dark-gray);
padding:10px 60px;

nav {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    /* justify-content: space-between; */

    h1{
        color: white;
        font-size: 45px;
        margin:0;
    }

    a {
        font-size: 19px;
        color: white;
        font-weight:600;
        text-decoration: none;
        margin-top:20px;
    }

    a:hover{
        text-decoration: underline;
        color:#feffe8;
    }

   
}
`

import styled, {css} from 'styled-components'

export const StyledHeader = styled.header`
background-color: var(--Dark-gray);
padding:10px 60px;

nav {
    display: flex;
    gap: 40px;
    justify-content: space-between;

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

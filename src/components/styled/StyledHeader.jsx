import styled, {css} from 'styled-components'

export const StyledHeader = styled.header`
background-color: var(--Dark-gray);
padding: 40px 60px;

nav {
    display: flex;
    gap: 40px;
    justify-content: space-between;

    a {
        font-size: 19px;
        color: white;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

   
}
`
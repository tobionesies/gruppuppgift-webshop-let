import styled from 'styled-components'

export const StyledProduct = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 50px auto;
    width: 50%;

    button {
        border-radius: 10px;
        padding: 5px;
        border: 1px solid gray;
    }

    button:hover{
        background-color: var(--Dark-gray);
        color: var(--Baby-powder);
    }

    #product-image {
        border: none;
        background-color: transparent;
        box-shadow: none;
    }

    img {
        width: 330px;
        height: 400px;
        border-radius: 10px;
    }

`
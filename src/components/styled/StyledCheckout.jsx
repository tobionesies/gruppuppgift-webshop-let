import styled from 'styled-components'

export const StyledCheckoutTable = styled.table`

#minusBtn, #plusBtn {
    border-radius: 50%;
    border:none;
    color:white;
    margin: 0 8px;
}

#minusBtn { background-color: var(--Dark-gray); opacity:0.7;}
#plusBtn { background-color: var(--Dark-gray); }

#x-btn{
        color:red;
        border: solid 1px red;
        background-color: transparent;
        border-radius: 5px;
    }
#x-btn:hover{
    color:white;
    background-color: red;
}


`
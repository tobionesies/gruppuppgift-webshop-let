import styled, {css} from 'styled-components'

export const StyledHeader = styled.header`
background-color: var(--Dark-gray);
padding:10px 60px;
display: flex;

/* table, tfoot, th, td {
  border: 1px solid;
} */



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

#cart-icon {
    margin-left: 63%;
    color: white;
    display: block;
    // left: 75%;
}



#cartTable {
    background-color: #ffffff;
    border: solid 2px var(--Dark-gray);
    border-top: 0px;
    position: absolute;
    top: 90px;
    left: 75%;
    color: black;
    padding: 5px;
    table-layout: fixed;
    width: auto;
    /* transform: translate(-40%,-30%);
    -ms-transform: translate(-50%,-50%); */
    min-height: 200px;
    max-height: 600px;
    min-width: 342px;
    max-width: 342px;
    overflow-y: auto;

    #x{
        color:red;
        border: solid 1px red;
        background-color: transparent;
        border-radius: 5px;
    }
    
    #total{
        color: red;
        font-weight: 600;
        
    }


    #buttons-td{
        margin: 0;
    }


    
    #checkout-btn{
        border-radius: 10px;
        border: none;
        padding: 10px;
        font-weight: 700;
        background-color: var(--Dark-gray);
        color: white;
        margin-left: 140px;
           
    }

    #clear-btn{
        border-radius: 10px;
        width: 100px;
        border: none;
        padding: 10px;
        font-weight: 700;
        background-color: orange;
        color: #141414;
    }
 
}

`

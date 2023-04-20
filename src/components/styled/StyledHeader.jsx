import styled, {css} from 'styled-components'

export const StyledHeader = styled.header`
background-color: var(--Dark-gray);
padding:10px 60px;
display: flex;
/* table, tfoot, th, td {
  border: 1px solid;
} */

h2 {
    display:flex;
    flex-wrap: nowrap;
}

td {
    text-align: center;
}





nav {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    width: auto;
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

#cart-div {
    width: 100%;
}

#cart-icon {
    float:left;
    margin-left: 95%;
    color: white;
    /* display: inline-block;  */
}

#cartTable-div{
    display:flex;
    justify-content:flex-end;
    position: absolute;
    width: 100%;
    top:90px;
    left: 0;  
}

#cartTable {
    position:relative;
    background-color: #ffffff;
    border: solid 2px var(--Dark-gray);
    border-top: 0px;
    margin-left: 75%;
    color: black;
    padding: 5px;
    table-layout: fixed;
    width: auto;
    z-index: 1;
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
        border-top: 1px solid gray;
        color: red;
        font-weight: 600;
        text-align: right;   
        padding: 10px;
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
    
    #checkout-btn:hover{
        color:orange;
    }



    #clear-btn{
        border-radius: 10px;
        width: 100px;
        border: solid orange 2px;
        padding: 10px;
        font-weight: 700;
        background-color: transparent;
        color: orange;
    }
    #clear-btn:hover {
        background-color: orange;
        color: black;
    }



 
}

`

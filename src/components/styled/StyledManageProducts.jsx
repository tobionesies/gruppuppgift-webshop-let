import styled, {css} from 'styled-components'

export const StyledManageProducts = styled.div`

    /* background-color: #c0c0c0; */
    padding: 20px 50px 50px 50px;

    table {
        margin: 0 auto;
        width: 100%;
        background-color: white;
        border-collapse: collapse;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        
    tr:nth-child(odd){
        background:var(--Battleship-gray);}
        
    tr:nth-child(even){
        background:#f5f5f5;
    }
            
    th, tr {
        /* border: solid #242424 2px; */
        padding: 10px;
    }

    th {
        background-color: #242424;
        color: white;
    }

    td {
        padding: 10px;
    }

    .tableData {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .update,
    .delete {
        border-radius: 5px;
    }

    .create {
        background-color: var(--Baby-powder);
        font-weight: 600;
        margin-bottom: 20px;
        color: var(--Dark-gray);
        border: var(--Dark-gray) 2px solid;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 2px 2px;
    }

    .create:hover{
        cursor: pointer;
        background-color: var(--Dark-gray);
        color: var(--Baby-powder);
    }

    .update {
        background-color: var(--Baby-powder);
        color: #1e6d27;
        border: #1e6d27 1px solid;
    }

    .update:hover{
        cursor: pointer;
        background-color: #1e6d27;
        color: white;
        border: #1e6d27 1px solid;
    }

    .delete {
        background-color: var(--Baby-powder);
        color: var(--Vermilion);
        border: var(--Vermilion) 1px solid;
    }

    .delete:hover {
        cursor: pointer;
        background-color: var(--Vermilion);
        color: white;
        border: var(--Vermilion) 1px solid;
    }



`
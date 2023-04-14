import styled, {css} from 'styled-components'

export const StyledManageProducts = styled.div`

    background-color: #c0c0c0;
    padding: 20px 50px 50px 50px;

    table {
        margin: 0 auto;
        width: 100%;
        background-color: white;
        border-collapse: collapse;
        border-radius: 5px;
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
        color: #509ebd;
        border: #509ebd 2px solid;
        border-radius: 5px;
        padding: 5px;
    }

    .update {
        background-color: var(--Baby-powder);
        color: #33b943;
        border: #33b943 1px solid;
    }

    .update:hover{
        background-color: #33b943;
        color: white;
        border: #33b943 1px solid;
    }

    .delete {
        background-color: var(--Baby-powder);
        color: var(--Vermilion);
        border: var(--Vermilion) 1px solid;
    }

    .delete:hover {
        background-color: var(--Vermilion);
        color: white;
        border: var(--Vermilion) 1px solid;
    }



`
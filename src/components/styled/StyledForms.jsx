import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: #545c5b;
    width: 300px;
    color: white;
    margin: 30px auto;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #26403C;

    input{
        padding: 5px;
        border: none;
        border-radius: 10px;
        width: 97%;
        margin: 0 auto;
    }

    .submitButton {
        margin: 30px 0px 20px 5px;
        border: solid 2px #26403C;
        background-color: #579371;
        color: white;
        font-weight: 600;
    }

    .submitButton:hover{
        cursor: pointer;
        background-color: #26403C;
        color: #F7F7F2;
    }
`
export const StyledBackButton = styled.button`
    margin: 40px 0px 0px 40px;
    padding: 10px 30px;
    font-weight: 600;
    background-color: transparent;
    border: 2px solid #26403C;
    border-radius: 10px;
    box-shadow: 2px 2px;

    
    :hover{
        background-color: #26403C;
        color:white;
        cursor: pointer;
    }
    `

export const StyledUpdateForm = styled(StyledForm)`
 background-color: #545c5b;
    width: 300px;
    color: white;
    margin: 30px auto;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #26403C;

    .submitButton {
        margin: 30px 0px 20px 5px;
        border: solid 2px #26403C;
        background-color: #579371;
        color: white;
        font-weight: 600;
    }
`
import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: antiquewhite;
    width: 300px;
    margin: 0px auto;
    padding: 10px 20px;
    border-radius: 10px;

    input{
        padding: 5px;
        border: none;
        border-radius: 10px;
        width: 97%;
        margin: 0 auto;
    }

    .submitButton {
        margin-top: 10px;
        margin-left: 5px;
        border: solid 2px #26403C;
        background-color: #F7F7F2;
        color: #26403C;
        font-weight: 600;
    }

    .submitButton:hover{
        cursor: pointer;
        border: solid 2px #F7F7F2;
        background-color: #26403C;
        color: #F7F7F2;
    }



`
export const StyledUpdateForm = styled(StyledForm)`
background-color: azure;

`
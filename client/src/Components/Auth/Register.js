import styled from "styled-components";

const Input = style.input`
    padding: 8px;
    margin: 15px 2px 15px 0;
`

function Register(props){


    return(
        <form className{props.className} onSubmit={props.onSubmit}>

        </form>
    )
}
import { Children } from "react";

export default function Button({onClickButton, text}){
    return(
        <>
        <button onClick={onClickButton}>{text}</button>
        </>
    )
}
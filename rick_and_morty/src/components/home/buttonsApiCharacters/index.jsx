import React from "react";
import './style.css'


const ButtonsApiCharacters = ({page, setPage}) => {

    const nextPage = () => {
        setPage(prevPage => prevPage + 1)
    }
    
    const backPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1)
        }
    } 

    return(
        <div className="containerButtons">
            <button onClick={backPage}>Back</button>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default ButtonsApiCharacters
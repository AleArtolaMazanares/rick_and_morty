import React from "react";
import { Link } from "react-router-dom";

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
        <div>
            <button onClick={nextPage}>Next</button>
            <button onClick={backPage}>Back</button>
            <Link to={'/search'}>Search</Link>
        </div>
    )
}

export default ButtonsApiCharacters
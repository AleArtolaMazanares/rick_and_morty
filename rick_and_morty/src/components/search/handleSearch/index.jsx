import React from "react";
import './style.css'

const HandleSearch = ({handleSubmit, handleChange}) => {
    return(
        <div className="containerHandleSearch">
        <form onSubmit={handleSubmit}>
            <input  placeholder="rick....." onChange={handleChange}/>
            <button type="submit">search</button>
        </form>
    </div>
    )
}

export default HandleSearch
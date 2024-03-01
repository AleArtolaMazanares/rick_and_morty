import React from "react";

const HandleSearch = ({handleSubmit, handleChange}) => {
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input  placeholder="rick....." onChange={handleChange}/>
            <button type="submit">search</button>
        </form>
    </div>
    )
}

export default HandleSearch
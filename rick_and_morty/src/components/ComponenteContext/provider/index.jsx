import React from "react";
import { RickAndMContext } from "../context";

const RickAndMProvider = ({children}) => {

    const apiRickAndM = (page) => {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    const searchApi = (name) => {
       try {
        return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then(response => response.json())
        .catch(error => console.log(error))
       } catch (error) {
        console.log(error)
       }
    }

    return(
        <RickAndMContext.Provider value={{apiRickAndM, searchApi}}>
            {children}
        </RickAndMContext.Provider>
    )
}

export default RickAndMProvider
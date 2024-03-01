import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RickAndMContext } from "../../components/ComponenteContext/context";
import CardsSearch from "../../components/search/cardsearch";
import HandleSearch from "../../components/search/handleSearch";

const Search = () => {
    const {searchApi} = useContext(RickAndMContext)
    const [character, setCharacter] = useState('')
    const [name, setName] = useState('rick')
    const [saveCharacter, setSaveCharacter] = useState([])


    const handleChange = (nameCharacter) => {
        setCharacter(nameCharacter.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (character.trim() !== '') {
            setName(character)
        }
    }

    useEffect(()=>{
        searchApi(name)
        .then(data => setSaveCharacter(data.results))
    },[name])



    return(
        <div>
            <h1>Search</h1>
            <div>
                <Link to={'/'}>Back</Link>
            </div>
            <HandleSearch handleSubmit={handleSubmit} handleChange={handleChange}/>
            <div>
                {
                    saveCharacter === undefined ? (
                    <p>No se encontro el personaje</p>
                    ) : (
                        saveCharacter.length !== 0 ? (
                        <CardsSearch saveCharacter={saveCharacter}/>
                        ) : (
                            <p>cargando...</p>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Search
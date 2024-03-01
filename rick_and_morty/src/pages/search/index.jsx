import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RickAndMContext } from "../../components/ComponenteContext/context";

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
            <div>
                <form onSubmit={handleSubmit}>
                    <input  placeholder="rick....." onChange={handleChange}/>
                    <button type="submit">search</button>
                </form>
            </div>
            <div>
                {
                    saveCharacter === undefined ? (
                    <p>No se encontro el personaje</p>
                    ) : (
                        saveCharacter.length !== 0 ? (
                            saveCharacter.map((characterinfo, index) => (
                                <div key={index}>
                                    <p>{characterinfo.name}</p>
                                    <img src={characterinfo.image} alt="" />
                                </div>
                            ))
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
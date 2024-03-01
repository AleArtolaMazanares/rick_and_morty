import React, { useContext, useEffect, useState } from "react";
import { RickAndMContext } from "../../components/ComponenteContext/context";
import CardsRickAndM from "../../components/home/cardsRickAndM";
import ButtonsApiCharacters from "../../components/home/buttonsApiCharacters";

const Home = () => {
    const{apiRickAndM} = useContext(RickAndMContext)
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        apiRickAndM(page)
        .then(data => setCharacters(data.results))
    },[page])

return(
    <div>
        <h1>Characters</h1>
            <ButtonsApiCharacters page={page} setPage={setPage}/>
            <CardsRickAndM characters={characters}/>
    </div>
    )
}

export default Home
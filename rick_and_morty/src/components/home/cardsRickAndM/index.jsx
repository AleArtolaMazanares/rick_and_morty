import React from "react";

const CardsRickAndM = ({characters}) => {
    return(
        <div>
            {
            characters.map((character, index) => (
                <div key={index}>
                    <p>{character.name}</p>
                    <img src={character.image}/>
                </div>
            ))
            }
        </div>
    )
}

export default CardsRickAndM
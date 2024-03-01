import React from "react";
import { Link } from "react-router-dom";
import './../../estiloGlobalCards/style.css'

const CardsRickAndM = ({characters}) => {
    return(
        <div className="containerCardsHome">
            {
            characters.map((character, index) => (
               <Link to={`info/${character.id}`}  key={index}>
                 <div className="cardsHome">
                    <p>{character.name}</p>
                    <img src={character.image}/>
                </div>
               </Link>
            ))
            }
        </div>
    )
}

export default CardsRickAndM
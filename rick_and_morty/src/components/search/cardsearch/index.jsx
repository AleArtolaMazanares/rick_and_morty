import React from "react";
import { Link } from "react-router-dom";
import './../../estiloGlobalCards/style.css'

const CardsSearch = ({saveCharacter}) => {
    return(
        <div className="containerCardsHome">
            {
                saveCharacter.map((characterinfo, index) => (
                    <Link to={`/info/${characterinfo.id}`}  key={index}>
                        <div className="cardsHome">
                        <p>{characterinfo.name}</p>
                        <img src={characterinfo.image} alt="" />
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CardsSearch
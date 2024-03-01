import React from "react";

const CardsSearch = ({saveCharacter}) => {
    return(
        <div>
            {
                saveCharacter.map((characterinfo, index) => (
                    <div key={index}>
                        <p>{characterinfo.name}</p>
                        <img src={characterinfo.image} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default CardsSearch
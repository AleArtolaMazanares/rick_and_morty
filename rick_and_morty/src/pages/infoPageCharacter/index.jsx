import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { RickAndMContext } from '../../components/ComponenteContext/context';
import './style.css'


function InfoPageCharacter() {
  const {id} = useParams()
  const {apiInfocharacter} = useContext(RickAndMContext)
  const [saveInformation, setSaveInformation] = useState([])

  useEffect(()=>{
    apiInfocharacter(id)
    .then(data => setSaveInformation(data))
  },[])


  return (
    <div className='containerGlobalInformation'>



      <div className='containerInfoCharacter'>
        {
          saveInformation.length !== 0 ? (
           <div className='containerInformation'>
            <p>Name: {saveInformation.name}</p>
            <img src={saveInformation.image} alt="" />
            <p>Genero: {saveInformation.gender}</p>
            <p>status: {saveInformation.status}</p>
            <p>specie: {saveInformation.species}</p>
           </div>
          ) : (
            <p id='spinner'>cargando...</p>
          )
        }
      </div>
    </div>
  )
}

export default InfoPageCharacter
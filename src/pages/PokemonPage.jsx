import React from 'react'

import { useParams } from 'react-router-dom';
import PokemonCard from '../components/pokemonComponents/PokemonCard';


const PokemonPage = () => {

  const {id, index} = useParams(); 

  return (
    <div className='w-full bg-[#FFFFFF]'>
      <div className=" min-w-[390px] max-w-[650px] m-auto h-screen shadow-2xl">
        <PokemonCard
          id={id}
          index={index}
        />
      </div>
    </div>
  )
}

export default PokemonPage
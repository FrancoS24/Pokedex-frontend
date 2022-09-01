import React from 'react'
import ImagenPokemon from './ImagenPokemon'
import { Link } from 'react-router-dom'


const Pokemon = ({id, name, img, type}) => {
  return (
    <>
    <Link         
     to={`/PokemonPage/${id}`}
     
     >

    <div className={`flex flex-col w-[110px] m-[7px] my-2 justify-between h-[140px] shadow-lg hover:text-[#F9CF30] bg-white rounded-lg borde${type} border-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110   duration-100`}>
      <div className='flex justify-end pr-[10px] pt-[5px]'>
          <p className={`font-light text${type}`}>
          #{String(id).padStart(3, '0')}
          </p>
      </div>
      <div className='flex items-center justify-center'>
          <ImagenPokemon
            img={img}
          />
      </div>
      <div className={`w-full h-[25px]  flex items-center  justify-center text-white ${type} rounded-b-[5px]`}>
          <h3 className='font-light capitalize'>{name}</h3>
      </div>
    </div>
    </Link>
    
    </>
  )
}

export default Pokemon
import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'


import pokemon1 from '../../images/pokemon1.png'


const AddPokemon = () => {

  

  return (
    <>
    <Link         
     to={`/NewPokemon`}
     
     >

    <div className={`flex flex-col w-[110px] m-[5px] my-2 justify-between h-[140px]  bg-white rounded-lg border-[#212121] border-2 animate-pulse transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110  duration-100`}>
      
        <div className="flex items-center justify-center ">
          
            <img
                className='w-[70px] h-[70px] mt-6 '
                src={pokemon1}
            />
          
        </div>
      <div className={`w-full h-[25px]  flex items-center  justify-center text-white bg-[#212121] rounded-b-[5px]`}>
          <h3 className='font-light text-xs capitalize'>New Pokémon</h3>
      </div>
    </div>
    </Link>
    
    </>
  )
}

export default AddPokemon
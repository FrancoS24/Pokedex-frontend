import React from 'react'
import AddPokemon from './AddPokemon'
import Pokemon from './Pokemon'

const ListaPokemon = ( {allPokemons}) => {
  console.log(allPokemons)

  return (
    <>
    <div 
        id='Lista'
        className='flex flex-wrap h-full fuente bg-[#F7F7F7]  items-center justify-center mt-2'>

        <AddPokemon />
            
        {allPokemons.map((pokemon, index) =>
            <Pokemon
            id={pokemon.id}
            img={pokemon.image}
            name={pokemon.name}
            type={pokemon.type}
            key={index}
            
            />
            )}
    </div>
    </>
  )
}

export default ListaPokemon
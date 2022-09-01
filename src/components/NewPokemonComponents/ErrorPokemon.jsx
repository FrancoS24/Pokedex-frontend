import React from 'react'

const ErrorPokemon = ({mensaje}) => {
  return (
    <div className='font-[1000] text-red-600'>
        <p>{mensaje}</p>
    </div>
  )
}

export default ErrorPokemon
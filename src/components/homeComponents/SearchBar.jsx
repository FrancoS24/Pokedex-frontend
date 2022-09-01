import React from 'react'

const SearchBar = (props) => {


  return (
    
    <>
        <input 
        placeholder='Buscar'
        className='full h-[25px] flex border-[#212121] outline-[#F9CF30] hover:border-[#F9CF30] hover:border-[3px] border-[0.1px] md:mx-6 mx-4 my-4 justify-center text-center rounded-lg'
        type="text" 
        onChange={(e) => props.onChange (e.target.value) }
        />
    </>
  )
}

export default SearchBar
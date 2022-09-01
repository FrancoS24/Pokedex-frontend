import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../../images/Pokeball.png'



const Header = ({handleString, handleNumeric}) => {
    
  const [sortByNumber, setSortByNumber] = useState(true)

  const handleChange = () => {
    if(!sortByNumber) {
     handleString()
    } else {
      handleNumeric()
    }
    setSortByNumber(!sortByNumber)
  }

 

  return (
    <div className='w-full ml-4 mt-4 mb-2 flex flex-row'>

      <Link to='/' >   
        <img
        className='w-[30px] h-[30px] ml-2  hover:animate-spin'
        src={Pokeball}  alt="" />
      </Link>
      
      <Link to='/'>
        <h1
        className='font-[1000] text-[#212121] text-2xl ml-6 hover:text-[#F9CF30] transition ease-in-out delay-100  hover:translate-x-1 hover:scale-110   duration-100'>
          Pokédex
        </h1>
      </Link>

        <div className='flex w-full justify-end'>
          <button
          className='mr-10'
          onClick={() => handleChange()}
          >

            {sortByNumber ? <i className={`fa-solid hover:border-2 hover:shadow-lg text-[25px] fa-arrow-down-a-z`}></i> :  <i className={`fa-solid text-[25px] hover:shadow-lg fa-arrow-down-1-9`}></i>}
             
            
          
      
          </button>
        </div>
    </div>
  )
}

export default Header
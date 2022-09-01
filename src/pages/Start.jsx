import React ,{ useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import Pokeball from '../images/Pokeball.png';
import FormLogin from '../components/startComponents/FormLogin';


const Start = () => {

  
  const loginAsGuest = () => {
    localStorage.setItem("token", null);
  }
  

  // useEffect(() => {
    
  //   fetch('http://localhost:4002/users', {mode: 'cors'})
  //     .then((response) => response.json())
  //     .then((resultado) => {
        
  //       console.log(resultado)
  //       setUsuarios(resultado) 
        
        
  //     })
      
  // }, []);


  

  



  return (
    <div className={`w-full bg-[#E0E0E0] bg-[url('https://images2.alphacoders.com/616/616343.jpg')] bg-cover bg-center `}>
    <div className=' flex content-around min-w-[390px] max-w-[650px]  h-screen m-auto rounded-xl shadow-2xl  border-black border-[1px] fuente flex-col bg-red-700 '>
      
      <div className=' flex flex-col items-center'>
      

        <h1
          className='font-[1000] text-[#212121] text-6xl my-20 transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110   duration-100'>
          Pokédex
        </h1>
        
          <img
            className='w-[120px] h-[120px] hover:animate-spin '
            src={Pokeball}  alt="" />
        


     
      </div>
      <div className='flex flex-col items-center mt-24'>
      <Link to='/login'>
        <input 
          type="button" 
          className="text-[#212121] w-[320px]  mt-4 font-[1000] h-8 w-full hover:bg-[#F9CF30] bg-[#E0E0E0] cursor-pointer rounded-lg transition ease-in-out delay-100  hover:translate-x-y-1 hover:scale-110   duration-100"
          value="Login"
          
        />
        </Link>

        <Link to='/signup'>
        <input 
          type="button" 
          className="text-[#212121] w-[320px]  mt-4 font-[1000] h-8 w-full hover:bg-[#F9CF30] bg-[#E0E0E0] cursor-pointer rounded-lg transition ease-in-out delay-100  hover:translate-x-y-1 hover:scale-110   duration-100"
          value="Sign up"
          
        />
        </Link>
        
        <div className='flex flex-row justify-between items-center'>
          <hr className='w-[120px] h-[1px] bg-[#212121] my-10' />
        </div>

        <Link to='/home'>
        <input 
          type="button" 
          className="text-[#212121] w-[320px] hover:text-[#E0E0E0] font-[1000] h-8 w-full hover:bg-[#212121] bg-[#E0E0E0] cursor-pointer rounded-lg transition ease-in-out delay-100  hover:-translate-x-y-1 hover:scale-110   duration-100"
          value="Login as a guest"
          onClick={() => {loginAsGuest()}}
          
          
        />
        </Link>
        



        
        

      </div>

      

    
      
    </div>
    </div>
  )
}

export default Start
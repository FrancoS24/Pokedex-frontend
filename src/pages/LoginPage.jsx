import React from 'react'
import FormLogin from '../components/startComponents/FormLogin'
import Pokeball from '../images/Pokeball.png'

const LoginPage = () => {
  return (
    <div className=" flex content-around min-w-[300px] max-w-[650px]  h-screen m-auto rounded-lg shadow-2xl  border-black border-[0.1px] fuente flex-col bg-red-700">
            <div className="flex flex-col ">
                <div className=' ml-6 mt-8 mb-2 flex flex-row'>
                    <img
                    className='w-[30px] h-[30px] hover:animate-spin'
                    src={Pokeball}  alt="" />

                    <h1 className='font-[1000] text-[#212121] text-2xl ml-6'>
                        Enter your user
                    </h1>
                </div>
                <FormLogin />
            </div>
            
        </div>
  )
}

export default LoginPage
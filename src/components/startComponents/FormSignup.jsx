import React ,{ useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPokemon from '../NewPokemonComponents/ErrorPokemon';

const FormSignup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)

  const history = useNavigate()
  
  const handleSubmit= async (e) => {
    

    const body = {
      name: username,
      email: email,
      password: password 
    }
    
    if ([username, email, password].includes('')) {
      setError(true);
      
    } else {
      const resp = await fetch('http://localhost:4002/signup', {
        mode: 'cors', 
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }, 
        })  
        console.log(resp)
        if(!resp.ok){
          alert('error')
        } else{
          
          history('/login')
          alert('Usuario creado con exito')
          
        }
      };
          
 
    
  }


  return (
    
        <div className='w-full'>
            
            <form >
            <div className='flex flex-col mt-10 mx-6 md:mx-14 items-center'>
                  { error && <ErrorPokemon className='text-white' mensaje='All fields are required'/>}
                  <input 
                    id='user'
                    type="text" 
                    value={username}
                    placeholder='User name'
                    className='w-full  border-[1px] hover:border-[3px] hover:border-[#F9CF30] outline-[#F9CF30]  rounded-lg pl-1 mt-8 mb-5'
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input 
                    id='user'
                    type="email" 
                    value={email}
                    placeholder='Email'
                    className='w-full  border-[0.1px]  hover:border-[3px] hover:border-[#F9CF30] outline-[#F9CF30]  rounded-lg pl-1 mb-5'
                    onChange={(e) => setEmail(e.target.value)}

                  />
                  <input 
                    id='user'
                    type="password" 
                    value={password}
                    placeholder='password'
                    className='w-full  border-[0.1px] hover:border-[3px] hover:border-[#F9CF30] outline-[#F9CF30]   rounded-lg pl-1'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                <div className='w-full flex justify-end  mr-2 '>
                  <input 
                  type="button" 
                  className="text-[#212121] transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110 hover:bg-[#F9CF30]  duration-100 w-[150px] mt-8 font-[1000] h-8   bg-[#E0E0E0] cursor-pointer rounded-lg"
                  value="Sign up"
                  onClick={() => {handleSubmit()}}
                />
                </div>
            </div>
            </form>
        </div>
    
  )
};

export default FormSignup
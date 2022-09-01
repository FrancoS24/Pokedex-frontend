import React ,{ useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const FormLogin = () => {
  
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()
  // const token = localStorage.getItem('token')

  // useEffect(() => {
  //   if (!token) {
  //     history('/')
  //   }
  // })

  // useEffect(() => {
    
  //   


  // setError(false)
  
  const handleSubmit= async (e) => {
    

    const body = {
      name: username,
      password: password 
    }
    ;

    try {
      const resp = await fetch('http://localhost:4002/login', {
          mode: 'cors', 
          method: 'POST', 
          body: JSON.stringify(body),
          headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
          }, 
        })  
        if(!resp.ok) {
          throw new Error("Usuario invalido");
        }
        const userFetch = await resp.json();
        localStorage.setItem("token", userFetch.token);
        history('/home');   
      }   catch (error) {
        
        console.log(error);
        alert('Usuario no encontrado')
        
      }
  };
  

  
  return (
    <div className='w-full '>
        <form className='mx-6 md:mx-14'>
          <div className='flex flex-col items-center mt-8s'>
            
              <input
                type="text" 
                placeholder='User name'
                value={username}
                className='w-full mx-8 md:mx-10 h-8 border-black hover:border-[#F9CF30] outline-[#F9CF30] hover:border-[3px] border-[0.1px] rounded-lg pl-2 mt-5 mb-5'
                onChange={(e) => setUsername(e.target.value)}
              />

              <input 
                type="password" 
                placeholder='Password'
                value={password}
                className='w-full mx-8 h-8 border-black border-[0.1px] hover:border-[#F9CF30] outline-[#F9CF30] hover:border-[3px] rounded-lg pl-2'
                onChange={(e) => setPassword(e.target.value)}
              />
          

             
              <div className='w-full flex justify-end mr-2 '>
                <input 
                  type="button" 
                  className="text-[#212121] transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110 hover:bg-[#F9CF30]  duration-100 w-[150px] mt-8 font-[1000] h-8   bg-[#E0E0E0] cursor-pointer rounded-lg"
                  value="Login"
                  onClick={() => {handleSubmit()}}
                />
              </div>
            </div>
        </form>
        </div>
      
      

    
  )
}


export default FormLogin
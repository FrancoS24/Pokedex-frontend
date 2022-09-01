import React ,{ useState , useEffect } from 'react'
import FormNewPokemon from "../components/NewPokemonComponents/FormNewPokemon";
import Pokeball from "../images/Pokeball.png"
import { useNavigate } from 'react-router-dom';



const NewPokemon = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

  useEffect(() => {
    if(token === "null") {
      navigate('/login')
    }
  })



    return(
        <div className=' w-full bg-[#E0E0E0]'>
            <div className=" min-w-[390px] max-w-[650px] m-auto bg-yellow-400 min-h-screen rounded-lg  border-black border-[1px] shadow-2xl flex flex-col bg-yellow-400" >
                <div className=' ml-4 mt-8 mb-2 flex flex-row'>
                    <img
                        className='w-[30px] h-[30px] hover:animate-spin'
                        src={Pokeball}  alt="" 
                        onClick={() => navigate('/home')}/>

                    <h1
                        className='font-[1000] text-[#212121] text-2xl ml-6'
                    >New Pokemon</h1>



            </div>
                <FormNewPokemon />

            </div>
        </div>
    )
}

export default NewPokemon;

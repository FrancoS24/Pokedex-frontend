import React ,{ useState , useEffect } from 'react'
import SearchBar  from '../components/homeComponents/SearchBar'
import Header from '../components/homeComponents/Header'
import ListaPokemon from '../components/homeComponents/ListaPokemon'
import Spinner from '../components/homeComponents/Spinner'
import AddPokemon from '../components/homeComponents/AddPokemon'



const Inicio = () => {
  const token = localStorage.getItem('token')
  const [valor, setValor] = useState('') 
  const [cargando, setCargando] = useState(false)
  const [allPokemons, setAllPokemons] = useState([])
  


  const getAllPokemons = async () => {
    setCargando(true)
    const result = await fetch('http://localhost:4002/pokemon', {mode: 'cors'})
    const data = await result.json();
    setAllPokemons(data)
    console.log(data)
    setCargando(false)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  console.log(token);

  const handleString = () => {
    const strAscending = [...allPokemons].sort((a,b) => 
      a.name < b.name ? -1 : 1
    );
    setAllPokemons(strAscending)
  }

  const handleNumeric = () => {
    const numAscending = [...allPokemons].sort((a,b) =>
      a.id - b.id
    );
    setAllPokemons(numAscending)
  }

  

  
  return (
    <div className='w-full bg-[#E0E0E0]'>
        <div className='flex min-w-[300px] max-w-[650px] h-full m-auto rounded-xl border-black border-[1px] shadow-2xl fuente flex-col bg-[#F7F7F7]'>
            <Header 
            handleNumeric={handleNumeric}
            handleString={handleString}
            />
            <SearchBar 
            onChange={setValor}
            

            /> 
            {cargando && <Spinner />}
            {!cargando && <ListaPokemon allPokemons={allPokemons.filter((pokemon) => pokemon.name.match(valor))} 
            
            />}
            

        </div>    
    </div>
  )
}

export default Inicio
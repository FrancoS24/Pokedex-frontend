import React ,{ useState , useEffect } from 'react'
import ErrorPokemon from './ErrorPokemon'

const FormularioPokemon = ({pokemons, setPokemons, pokemon, setPokemon}) => {

  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [HP, setHP] = useState('')
  const [ATK, setATK] = useState('')
  const [DEF, setDEF] = useState('')
  const [SATK, setSATK] = useState('')
  const [SDEF, setSDEF] = useState('')
  const [SPD, setSPD] = useState('')

  
  const [types, setTypes] = useState('')
  const [moves, setMoves] = useState('')

  const [error, setError] = useState('')

  useEffect(() => {
    const moves = fetch('')
    const types = fetch('')
  })

  const handleNewPokemonSubmit = async (e) => {

    const body = {
      pokemon: {
        name: name,
      weight: weight,
      height: height,
      description: description,
      image: image,
      HP: HP,
      ATK: ATK,
      DEF: DEF,
      SATK: SATK,
      SDEF: SDEF,
      SPD: SPD
      },

      moves:
    [
    {  
        moves_id: 40,
        name: "mega-punch"
    },
    {
        moves_id: 15,
        name:"pay-day"
    }
    ],
    types: 
    [
     {
        types_id: 40,
        name: "poison"
     },
     {
         types_id: 50,
         name: "ground"
     }

    ]
    
    
  }
  // if([name, weight, height, description, image, HP, ATK, DEF, SATK, SDEF, SPD].includes('')) {
  //   setError(true)
  // } else {
  const resp = await fetch('http://localhost:4002/pokemon/NewPokemon', {
    mode: 'cors', method: 'POST', 
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
    body: JSON.stringify(body)})
  .then((resp) => resp.json())
  .catch((error) => {
    return error
  })
  // };
  
} 



  return (
    <div>
      <form  className='mx-6'>
          <div className='flex flex-col items-center mt-10'>

              { error && <ErrorPokemon mensaje='All fields are required'/>}

              <input
                id='nombrePokemon'  
                type="text" 
                value={name}
                placeholder='Pokemon name'
                className='w-full h-8 border-black hover:border-blue-700 hover:border-[3px] outline-blue-700 border-[0.1px] rounded-lg pl-2 mt-4 mb-4'
                onChange={(e) => setName(e.target.value)}
                
              />
              <input
                id='weight'
                type="number" 
                value={weight}
                placeholder='Weight'
                className='w-full h-8 border-black hover:border-blue-700  outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setWeight(e.target.value)}
                
              />
              <input 
                id='height'
                type="number" 
                value={height}
                placeholder='Height'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setHeight(e.target.value)}
              />
              <textarea
                id='description'
                value={description}
                className="w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                
                    />
              <input 
                id='image'
                type="url" 
                value={image}
                placeholder='Image'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setImage(e.target.value)}
              />
              <input 
                id='hp'
                type="number" 
                value={HP}
                placeholder='HP'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setHP(e.target.value)}
                
              />
              <input 
                id='atk'
                type="number" 
                value={ATK}
                placeholder='ATK'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4 '
                onChange={(e) => setATK(e.target.value)}
              />
              <input 
                id='def'
                type="number" 
                value={DEF}
                placeholder='DEF'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setDEF(e.target.value)}
              />
              <input 
                id='satk'
                type="text" 
                value={SATK}
                placeholder='SATK'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setSATK(e.target.value)}
              />
              <input 
                id='sdef'  
                type="number" 
                value={SDEF}
                placeholder='SDEF'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setSDEF(e.target.value)}
                
              />
              <input 
                id='spd'
                type="number" 
                value={SPD}
                placeholder='SPD'
                className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4'
                onChange={(e) => setSPD(e.target.value)}
                
              />
              <select className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4' name="moves" id="moves" >
                <option value="1">razor-wind</option>
                <option value="2">sword-dance</option>
                <option value="3">mega-punch</option>
                <option value="4">fire-punch</option>
                <option value="5">ice-punch</option>
                <option value="6">tackle</option>
                <option value="7">string-shot</option>
                <option value="8">harden</option>
                <option value="9">gust</option>
                <option value="10">poison-sting</option>
                <option value="11">headbutt</option>
                <option value="12">whirlwind</option>
                <option value="13">bind</option>
                <option value="14">slam</option>
                <option value="15">pay-day</option>
                <option value="16">cut</option>
                <option value="17">scratch</option>
              </select>
              <select className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4' name="moves" id="moves" >
                <option value="1">razor-wind</option>
                <option value="2">sword-dance</option>
                <option value="3">mega-punch</option>
                <option value="4">fire-punch</option>
                <option value="5">ice-punch</option>
                <option value="6">tackle</option>
                <option value="7">string-shot</option>
                <option value="8">harden</option>
                <option value="9">gust</option>
                <option value="10">poison-sting</option>
                <option value="11">headbutt</option>
                <option value="12">whirlwind</option>
                <option value="13">bind</option>
                <option value="14">slam</option>
                <option value="15">pay-day</option>
                <option value="16">cut</option>
                <option value="17">scratch</option>
              </select>

              <select className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 mb-4 ' name="types" id="types" >
                <option value="1">water</option>
                <option value="2">fire</option>
                <option value="3">grass</option>
                <option value="4">poison</option>
                <option value="5">ghost</option>
                <option value="6">electric</option>
                <option value="7">bug</option>
                <option value="8">flying</option>
                <option value="9">normal</option>
                <option value="10">psychic</option>
                <option value="11">steel</option>
                <option value="12">rock</option>
                <option value="13">dark</option>
                <option value="14">ground</option>
                <option value="15">dragon</option>
                <option value="16">fairy</option>
                <option value="17">fighting</option>
                <option value="18">ice</option>
              </select>

              <select className='w-full h-8 border-black hover:border-blue-700 outline-blue-700 hover:border-[3px] border-[0.1px] rounded-lg pl-2 ' name="types" id="types" >
                <option value="1">water</option>
                <option value="2">fire</option>
                <option value="3">grass</option>
                <option value="4">poison</option>
                <option value="5">ghost</option>
                <option value="6">electric</option>
                <option value="7">bug</option>
                <option value="8">flying</option>
                <option value="9">normal</option>
                <option value="10">psychic</option>
                <option value="11">steel</option>
                <option value="12">rock</option>
                <option value="13">dark</option>
                <option value="14">ground</option>
                <option value="15">dragon</option>
                <option value="16">fairy</option>
                <option value="17">fighting</option>
                <option value="18">ice</option>
              </select>
              <div className='w-full flex justify-end'>
                <input 
                  type='button'
                  className='text-[#FFFFFF] w-[200px]  hover:border-blue-700 mt-10 mr-4 font-[1000] h-8 w-full hover:text-[#212121] hover:bg-[#F9CF30] bg-[#666666] transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110 hover:bg-blue-500  duration-100  rounded-lg'
                  value='Add Pokemon'
                  onClick={() => {handleNewPokemonSubmit()}}
                />
              </div>
          </div>
          
          
          
        
      </form>

    </div>
  )
}

export default FormularioPokemon
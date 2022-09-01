import React, { useState, useEffect } from 'react'
import Pokeball from '../../images/Pokeball.png'
import Weight from '../../images/Weight.svg'
import Height from '../../images/Height.svg'
import { Link } from 'react-router-dom'
 

const PokemonCard = ({id, index}) => {

    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState({})
    const [pokemonType, setPokemonType] = useState('')
    const [pokemonMoves , setPokemonMoves] = useState ('')
    // const [selectedPokemonText, setSelectedPokemonText] = useState('')
    const [pokemonTypes, setPokemonTypes] = useState([])
    // const [selectedPokemonHP, setSelectedPokemonHP] = useState("")
    // const [selectedPokemonATK, setSelectedPokemonATK] = useState("")
    // const [selectedPokemonDEF, setSelectedPokemonDEF] = useState("")
    // const [selectedPokemonSATK, setSelectedPokemonSATK] = useState("")
    // const [selectedPokemonSDEF, setSelectedPokemonSDEF] = useState("")
    // const [selectedPokemonSPD, setSelectedPokemonSPD] = useState("")
    // const [pokemonId, setPokemonId] = useState("")

    const getPokemon = async () => {
        console.log("me ejekuto")
        await fetch(`http://localhost:4002/pokemon/${id}`, {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            
            setSelectedPokemonDetails(data.pokemon);
            setPokemonTypes(data.types)
            setPokemonMoves(data.moves)
            console.log(data.moves)
          
        })
        .catch((error) => {
            console.log(error)
        })
      }
      
      
      
      useEffect(() => {
        getPokemon()
        
      } , [id]);

    const nextPokemon = parseInt(id) + 1;
    const previousPokemon = parseInt(id) - 1;

  return (
    <div className='border-[1px] border-black rounded-xl'>
      <div className={`borde${selectedPokemonDetails.type} ${selectedPokemonDetails.type} h-screen rounded-xl `}>
          <div className={`flex ${selectedPokemonDetails.type} flex-col min-w-[300px] max-w-[650px] rounded-xl`}>

           <div className='flex mt-4 text-white'>
             
            <div className='flex flex-row ml-4'>
            <Link
             to={`/home `}
             >
               <i className="fa-solid flex  text-[25px] fa-arrow-left  "></i>
             </Link>
             <p className=' font-[700] capitalize text-2xl ml-10'>{selectedPokemonDetails.name}</p>
            </div>

            <div className='w-full flex flex-row-reverse'>
              <p className='ml-[140px] font-semibold text-2xl mr-4'>#0{selectedPokemonDetails.id}</p>
            </div>

           </div>
           <div>
             <img 
             className='opacity-5 static md:ml-[385px] sm:ml-[385px] ml-[185px] h-[200px] w-[200px]'
             src={Pokeball} alt="" />
           </div>

          {   (id < 2) ? 
              <Link  to={`/PokemonPage/${nextPokemon} `} >
                  <i className="fa-solid flex  text-[25px] text-white mr-6 justify-end fa-arrow-right "></i>
               </Link>
              : 
             <div className='flex items-center justify-between'> 
               <Link to={`/PokemonPage/${previousPokemon} `} >
                 <i className="fa-solid flex  text-[25px] text-white ml-6  fa-arrow-left "></i>
               </Link> 
               <Link to={`/PokemonPage/${nextPokemon} `} > 
                 <i className="fa-solid flex  text-[25px] text-white mr-6  fa-arrow-right "></i>
               </Link> 
             </div>
          }
         </div>
         <img 
          className='flex  top-[75px] left-0 right-0 md:h-[290px] md:w-[290px] h-[270px] m-auto w-[270px] absolute transition ease-in-out delay-100  hover:translate-y-1 hover:scale-110  duration-100'
          src={selectedPokemonDetails.image} alt="" />

          <div
           className='bg-white flex flex-col items-center rounded-xl m-[5px] h-[72.5vh] md:h-[69vh] mt-[20px] min-w-[360px] max-w-[650px]'>
          
          <div className="mt-[70px] flex w-full justify-center text-center  text-white">
            {pokemonTypes.map( (type) => (
              <p className={` h-[35px] w-[70px] ${type.name} rounded-full text-center flex items-center justify-center capitalize m-[10px] `}>{type.name}</p>
            ))}

        </div>

        <p className={`  text${selectedPokemonDetails.type} font-[700] mt-4`}>About</p>

        <div className='flex flex-row mt-2 justify-evenly min-w-[300px] max-w-[650px] '>
            <div className=' flex-col justify-center items-center'> 
              <div className='flex items-center'>
                <img src={Weight}/>
                <p className='mx-2'>{selectedPokemonDetails.weight} kg</p>
                <hr className='bg-gray-200 ml-[25px] h-[60px] w-[2px]'/>
              </div>  
              <p className='text-gray-600 ml-4 text-sm'>Weight</p>
            </div>
            <div className=' flex-col justify-center pl-6 items-center '> 
              <div className='flex  items-center '>
                <img src={Height} />
                <p className='mx-2'>{selectedPokemonDetails.height} m</p>
                <hr className='bg-gray-200 ml-[25px] h-[60px] w-[2px] '/>  
              </div>  
              <p className='text-gray-600  text-sm'>Height</p>
          </div>
            <div className='flex flex-col justify-center md:ml-4 items-center text-center'>
              <p className='capitalize'>{pokemonMoves && pokemonMoves[0]?.name}</p>
              <p className='capitalize'>{pokemonMoves && pokemonMoves[1]?.name}</p>
              <p className='text-gray-600 mt-[9px] text-sm'>Moves</p>
            </div>
        </div>
            <p className='mx-4 mt-4 md:w-[400px]  text-center'>{selectedPokemonDetails.description}</p>
          <h3 className={`text-center text${selectedPokemonDetails.type}  mr-2 mt-16 text-xl md:text-2xl font-[700] mb-4 `}>Base Stats</h3>
          <div className='flex '>
            <div className={`flex flex-col font-[700]  text-sm text${selectedPokemonDetails.type}`}>
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <hr className='bg-gray-200 mx-2 md:text-xl  h-[120px]  w-[2px] '/> 
            <div className='flex flex-col text-sm '>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.HP}`}</p>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.ATK}`}</p>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.DEF}`}</p>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.SATK}`}</p>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.SDEF}`}</p>
              <p className={`text${selectedPokemonDetails.type}`}>{`${selectedPokemonDetails.SPD}`}</p>
              </div> 
            <div>
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.HP && selectedPokemonDetails[0]?.HP}</p> 
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.ATK && selectedPokemonDetails[1]?.ATK}</p>
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.DEF && selectedPokemonDetails[2]?.DEF}</p>
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.SATK && selectedPokemonDetails[3]?.SATK}</p>
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.SDEF && selectedPokemonDetails[4]?.SDEF}</p>
              <p className={` text${selectedPokemonDetails.type} text-sm font-[700]`}>{selectedPokemonDetails.SPD && selectedPokemonDetails[5]?.SPD}</p> 
            </div>

            <div className='flex ml-2 flex-col  items-center w-[280px]'>

              <div className={` bg-slate-300 rounded-xl h-[4px] mt-2 w-[100%]`}>
                <div className={`${selectedPokemonDetails.type} rounded-xl h-[4px] w-[${selectedPokemonDetails.HP / 2}%] `}></div>
              </div>

              <div className={`  bg-slate-300 rounded-xl h-[4px] mt-4 w-[100%]`}>
                <div className={`${selectedPokemonDetails.type}  rounded-xl h-[4px]  w-[${selectedPokemonDetails.ATK / 2}%] `}>
                </div>
              </div>

              <div className={`bg-slate-300 rounded-xl h-[4px] mt-4 w-[100%]`}>
                <div className={`${selectedPokemonDetails.type}  rounded-xl h-[4px]  w-[${selectedPokemonDetails.DEF / 2}%] `}></div>
              </div>

              <div className={`  bg-slate-300 rounded-xl h-[4px] my-[12px] w-[100%]`}>
                <div className={`${selectedPokemonDetails.type}  rounded-xl h-[4px]  w-[${selectedPokemonDetails.SATK / 2 }%] `}></div>
              </div>

              <div className={` bg-slate-300  rounded-xl h-[4px] mt-[4px] w-[100%]`}>
                <div className={`${selectedPokemonDetails.type}  rounded-xl h-[4px]  w-[${selectedPokemonDetails.SDEF / 2}%] `}></div>
              </div>

              <div className={` bg-slate-300  rounded-xl h-[4px] mt-[15px] w-[100%]`}>
                <div className={`${selectedPokemonDetails.type}  rounded-xl h-[4px]  w-[${selectedPokemonDetails.SPD / 2}%] `}></div>   
              </div>

            </div>
          </div>
      </div>




      </div>
    </div>
  )
}

export default PokemonCard
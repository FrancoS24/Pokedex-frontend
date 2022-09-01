import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import './App.css';

import Start from './pages/Start';
import Signuppage from './pages/Signuppage';
import NewPokemonPage from './pages/NewPokemonPage';
import Home from './pages/Home';
import PokemonPage from './pages/PokemonPage';
import LoginPage from './pages/LoginPage';

import "@fontsource/poppins";



const App = () => {


  return (
  <div className='w-full letra  m-auto h-full'>
   <BrowserRouter>
    <Routes>
      <Route 
       path='/'
       element={<Start />}
      />
      <Route 
       path='/home'
       element={<Home />}
      />
      
      <Route 
       path='/login'
       element={<LoginPage />}
      />
      <Route 
       path='/signup'
       element={<Signuppage />}
      />
      
      <Route 
       path='/NewPokemon'
       element={<NewPokemonPage />}
      />
      <Route 
       path='/PokemonPage/:id'
       element={<PokemonPage />}
      />
    </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App;

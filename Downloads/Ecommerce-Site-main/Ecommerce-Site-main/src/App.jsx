import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'

import LandingPage from './stores/Pages/LandingPage'
import MobilePage from './stores/Pages/MobilePage'
import ComputerPage from './stores/Pages/ComputerPage'
import WatchPage from './stores/Pages/WatchPage'
import MenPage from './stores/Pages/MenPage'
import WomanPage from './stores/Pages/WomanPage'
import FurniturePage from './stores/Pages/FurniturePage'
import KitchenPage from './stores/Pages/KitchenPage'
import AcPage from './stores/Pages/AcPage'
import FridgePage from './stores/Pages/FridgePage'

import MobileSingle from './stores/Singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './stores/Singles/ComputerSingle'
import FridgeSingle from './stores/Singles/FridgeSingle'
import FurnitureSingle from './stores/Singles/FurnitureSingle'
import WatchSingle from './stores/Singles/WatchSingle'
import MenSingle from './stores/Singles/MenSingle'
import WomanSingle from './stores/Singles/WomanSingle'
import KitchenSingle from './stores/Singles/KitchenSingle'
import AcSingle from './stores/Singles/AcSingle'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
        <Route path='/watches' element={<WatchPage/>}/>
        <Route path='/mens' element={<MenPage/>}/>
        <Route path='/womans' element={<WomanPage/>}/>
        <Route path='/furnitures' element={<FurniturePage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/ac' element={<AcPage/>}/>    
        <Route path='/fridge' element={<FridgePage/>}/>
          <Route path='/mobiles/:id' element={<MobileSingle/>}/>
          <Route path='/computers/:id' element={<ComputerSingle/>}/>
          <Route path='/watches/:id' element={<WatchSingle/>}/>
          <Route path='/men/:id' element={<MenSingle/>}/>
          <Route path='/woman/:id' element={<WomanSingle/>}/>
          <Route path='/fridge/:id' element={<FridgeSingle/>}/>
          <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
          <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
          <Route path='/ac/:id' element={<AcSingle/>}/>

        <Route path='/cart' element={<UserCart/>}/>      
      </Routes>
    </div>
  )
}

export default App

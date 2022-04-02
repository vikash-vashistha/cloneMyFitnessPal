import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Community } from './Components/community/community'
import { AllApps } from "./Components/allApps/AllApps"
import {Payment} from "./Components/Payment"

function App() {


  return (
    <div className="App">
      {/* <AllApps /> */}
      {/* <Community /> */}
      <Payment/>
    </div>
  )
}

export default App

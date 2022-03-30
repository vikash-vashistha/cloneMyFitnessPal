import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Community } from './Components/community/community'
import {AllApps} from "./Components/allApps/AllApps"

function App() {


  return (
    <div className="App">
      {/* <AllApps /> */}
      <Community />
    </div>
  )
}

export default App

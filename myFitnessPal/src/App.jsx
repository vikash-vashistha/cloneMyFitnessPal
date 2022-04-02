import { useState } from 'react'
import './App.css'

import AfterHome from './Components/AfterHome/AfterHome'
import BeforeAbout from './Components/BeforeAbout/BeforeAbout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BeforeAbout/>
      <AfterHome/>
      {/* <BeforeFood/> */}
    </div>
  )
}

export default App

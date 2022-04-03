import React from 'react'
import { Link } from 'react-router-dom'
import "./Notfound.css"
function Notfound() {
  return (
    <div>
    <br/>
        <img className='nf-img' src="https://media.giphy.com/media/3o7btLwXcwJj6QqQiQ/giphy.gif" alt="notfound"/><br/>
      <Link to="/">  <button className='nf-btn'>Go Back To Home</button></Link>
    </div>
  )
}

export default Notfound
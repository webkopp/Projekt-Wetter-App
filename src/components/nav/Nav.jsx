import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav>
            <Link to="/"><button>Wetter-App Home</button></Link>
        </nav>
    </>
  )
}

export default Nav

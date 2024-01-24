import React from 'react'
import Nav from '../../components/nav/Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>
            <h1>Weather App</h1>
            <h2>Choose a City</h2>
            <Link><button>Hamburg</button></Link>
            <Link><button>Berlin</button></Link>
            <Link><button>Köln</button></Link>
            <Link><button>Australien</button></Link>
        </div>
        <Nav />
    </>
  )
}

export default Home

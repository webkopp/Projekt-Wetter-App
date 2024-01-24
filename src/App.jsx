
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weatherlist' element={<WeatherList />} />
        <Route path='/weatherlist/:weathTemp' element={<WeatherDetails />} />
      </Routes>
      
    </>
  )
}

export default App

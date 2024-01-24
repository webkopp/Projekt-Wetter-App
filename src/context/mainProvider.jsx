
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
  const [city, setCity] = useState()
  const [data, setData] = useState()
  const [tempToC, setTempToC] = useState(0)
  const [feelsLikeToC, setFeelsLikeToC] = useState(0)
  useEffect(() => {
    const getWeather = async () => {
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cccc62d5ad215ed1ec698954798e7a2&units=metric`)
      setData(resp.data)
    }
    {city ? getWeather() : null}
  }, [city])

  return (
    <>
    <mainContext.Provider value={{ setCity, data, tempToC, feelsLikeToC}}>
      {children}
    </mainContext.Provider>
    </>
  )
}

export default MainProvider
import React, { useContext } from 'react'
import Nav from '../../components/nav/Nav'
import { mainContext } from '../../context/mainProvider'
import WeatherCard from '../weatherCard/WeatherCard'

const WeatherList = () => {

    const { datas } = useContext(mainContext)

    console.log("datas vom WeatherList", typeof datas);

    return (
        <>
            <div>WeatherList</div>
            <Nav />
            <main>
                {datas.map((data, index) => {
                    return (
                        <div key={index}>
                            <WeatherCard
                                data={data}
                            />
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default WeatherList
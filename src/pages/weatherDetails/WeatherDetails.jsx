import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/mainProvider';

const WeatherDetails = () => {
    const weathTemp = useParams()
    const [weather, setWeather] = useState()

    const { datas } = useContext(mainContext)


    useEffect(() => {
        const filterData = datas.filter((data) => {
            return data.id === Number(weathTemp.weathTemp)
        })
        setWeather(filterData[0])
    }, [weathTemp, datas])


    return (
        <>
            {product ?
                (
                    <>
                        <p>{city.data}</p>
                    </>
                )
                :
                (
                    <p>
                        Loading...
                    </p>
                )}

        </>
    )
}

export default WeatherDetails
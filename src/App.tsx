import { useState } from 'react'
import { AirQuality } from './Pages/Quality/AirQuality'
import { SunTime } from './Pages/SunTime/Suntime'
import { TemperatureNow } from './Pages/temperaturaNow'
import { WeekWeather } from './Pages/WeekWather/WeekWeather'
import './Styles/global.css'

function App() {

  return (
    <div  className='w-full h-screen flex flex-row justify-center items-center'>
        <TemperatureNow />
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <AirQuality />
            <SunTime />
          </div>
          <div className='mt-6'>
            <WeekWeather />
          </div>
        </div>
    </div>
  )
}

export default App

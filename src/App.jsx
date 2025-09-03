import { useState } from 'react'
import EnterCity from './components/enterCity'
import './App.css'
import WeatherInfs from './components/WeatherInfs';

function App() {
const [weatherApi, setWeatherApi]=useState([]);
  return (
    <>
      <EnterCity weatherApi={weatherApi} setWeatherApi={setWeatherApi} />
      <WeatherInfs weatherApi={weatherApi} />
    </>
  )
}

export default App

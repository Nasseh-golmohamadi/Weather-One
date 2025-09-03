import React from 'react'

const WeatherInfs = ({weatherApi}) => {
    const imgUrl="http://openweathermap.org/img/wn/";
    console.log(weatherApi);
    
  return (
    <div>
        <ul>
            <li>
                {weatherApi?.city?.name}
            </li>
            <li>
                  {Math.floor(weatherApi?.list?.[0]?.main?.temp ?? 0)}°
            </li>
            <li>
                <img src={`${imgUrl}${weatherApi?.list?.[0]?.weather?.icon}@2x.png`} alt="" />
            </li>
        </ul>
        
    </div>
  )
}

export default WeatherInfs
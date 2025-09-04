import React from 'react'

const WeatherInfs = ({ weatherApi }) => {

    if (!weatherApi || !weatherApi.city || !weatherApi.list) {
        return <p>Loading...</p>;
    }

    console.log(weatherApi);

    return (
        <div>
            <ul>
                <li>
                    {weatherApi.city.name}
                </li>
                <li>
                    {Math.floor(weatherApi.list[0].main.temp_max)}°
                </li>
                <li>
                    {Math.floor(weatherApi.list[0].main.temp_min)}°
                </li>
                <li>
                    <img src={`http://openweathermap.org/img/wn/${weatherApi?.list[0].weather[0].icon}@2x.png`} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default WeatherInfs
import React, { useEffect, useState } from 'react'
import axios from "axios";


const enterCity = ({weatherApi, setWeatherApi}) => {
    const [inputValue, setInputValue] = useState("tehran");
    const api_key="10e500a2733b2361f1e74acf08b3cccc";

    useEffect(()=> {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${api_key}&units=metric&cnt=7`)
            .then((response) => {
                setWeatherApi(response.data);
            })
            .catch((error) => {
                console.error("Axios did not get data:", error);
            });
    },[inputValue])
    
    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

export default enterCity
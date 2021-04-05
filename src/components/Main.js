import React, {useState} from 'react';
import axios from "axios"
import Header from "./Header"
import Card from "./Card"
import WeatherSearch from './WeatherSearch';
import Weatherdata from './Weather';








const Main = () => {

    const [weather, setWeather] = useState() 
    const fetchdata = async e => {

        e.preventDefault()
        const API_KEY = "965d1999225fb47b09242ec2faec313e"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`
        const req = axios.get(url)
        const res = await req 

        setWeather(res.data.main)
        
    }
    console.log(weather)


    return ( 
        <div className="main">
            <Header />
            <Card>
            <WeatherSearch fetchdata={fetchdata} />
            {weather && <Weatherdata weather={weather} />}
            </Card>
        </div>
     );
}
 
export default Main;
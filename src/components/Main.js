import React, {useState} from 'react';
import axios from "axios"
import Context from "../Contexts"
import Header from "./Header"
import Card from "./Card"
import WeatherSearch from './WeatherSearch';
import Weatherdata from './Weather';








const Main = () => {

    const [weather, setWeather] = useState() 
    const [name, setName] = useState()



    const fetchdata = async e => {

        e.preventDefault()

        const location = e.target.elements.location.value
        
        const API_KEY = "965d1999225fb47b09242ec2faec313e"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const req = axios.get(url)
        const res = await req 

        setWeather(res.data.main)
        setName(res.data.name)
        
    }
    console.log(weather)


    return ( 
        <div className="main">
            <Header />
            <Card>
                <Context.Provider value = {{fetchdata , weather, name}}>
                    <WeatherSearch  />
                    {weather && <Weatherdata />}
                </Context.Provider>
            </Card>
        </div>
     );
}
 
export default Main;
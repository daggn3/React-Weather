import React, {useState} from 'react';
import axios from "axios"
import Context from "../Contexts"
import Header from "./Header"
import Card from "./Card"
import WeatherSearch from './WeatherSearch';
import Weatherdata from './Weather';
import Fail from './Fail'

import Time from "./Time"
import Greeting from './Greeting';
import Footer from './Footer';

console.log(process.env.REACT_APP_WEATHER_API_KEY)



const Main = () => {

    const [weather, setWeather] = useState() 
    const [name, setName] = useState()
    const [error, setError] = useState()



    const fetchdata = async e => {

        e.preventDefault()

        const location = e.target.elements.location.value
        if (!location) return (setError("Please Enter the Name of a Location!"), setWeather(null))
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        const req = axios.get(url)
        const res = await req 

        setWeather(res.data.main)
        setName(res.data.name)
        setError(null)
        
    }
    


    return ( 
        <div className="main">
            <Header />
            
            <Card>
            
                <Time />
                <Greeting />
                <Context.Provider value = {{fetchdata , weather, name, error}}>
                    <WeatherSearch  />
                    {weather && <Weatherdata />}
                    {error && <Fail error={error}/>}
                </Context.Provider>
                <Footer />
            </Card>
        </div>
     );
}
 
export default Main;
import React,  {useContext} from 'react';   
import { BiSearchAlt } from "react-icons/bi"   

import Context from "../Contexts"

const WeatherSearch = () => {

    const {fetchdata} = useContext(Context)
    return (
        <div className="weather-search">
            <form onSubmit={fetchdata} className="weather-search__form">
            <input name="location" autoComplete="off" className="weather-search__input" type="text"/>
        <div className="weather-search__submit">
            <button className="weather-search__button"><BiSearchAlt/></button>
            </div>
        </form>
        </div>
      );
}
 
export default WeatherSearch;
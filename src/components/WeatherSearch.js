import React,  {useContext} from 'react';      

import Context from "../Contexts"

const WeatherSearch = () => {

    const {fetchdata} = useContext(Context)
    return (
        <div className="weather-search">
            <form onSubmit={fetchdata} className="weather-search__form">
            <input name="location" autoComplete="off" className="weather-search__input" type="text"/>
        <div className="weather-search__submit">
            <button className="weather-search__button">&rarr;</button>
            </div>
        </form>
        </div>
      );
}
 
export default WeatherSearch;
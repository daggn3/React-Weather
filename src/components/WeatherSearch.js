import React from 'react';      


const WeatherSearch = (props) => {
    return (
        <div className="weather-search">
            <form onSubmit={props.fetchdata} className="weather-search__form">
            <input autoComplete="off" className="weather-search__input" type="text"/>
        <div className="weather-search__submit">
            <button className="weather-search__button">&rarr;</button>
            </div>
        </form>
        </div>
      );
}
 
export default WeatherSearch;
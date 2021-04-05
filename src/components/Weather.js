import React, {useContext} from 'react';
import Context from '../Contexts'





const WeatherData = () => {
    const {weather, name} = useContext(Context)
    
    const {temp, humidity, pressure} = weather
    
    return ( 
        <div className="weather-data">
  <p className="weather__tagline">Current Weather Information for <span className="weather-data__city">{name}</span></p>
  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">Temperature (°C)</p>
      <p className="weather-data__value">{temp}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Humidity (g.kg-1)</p>
      <p className="weather-data__value">{humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Pressure (psf)</p>
      <p className="weather-data__value">{pressure}</p>
    </span>
  </div>
</div>
     );
}
 
export default WeatherData;
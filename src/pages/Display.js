import React, { useState } from 'react'
import './display.css';
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity, WiBarometer,WiStrongWind } from "react-icons/wi";


function Display(props) {
    const {data} = props;
    const [unknownlocation, setUnknownLocation] = useState(false)
    return (
        <div className="displayWeather">
            <div className="weatherContainer">
                <div className="location-header">
                {
                            unknownlocation == false ?
                            <RenderResults data={data}/>
                             : <p>Unable to Locate City</p>
                        }
                </div>                      
                </div>
        </div>
    )
}
const RenderResults = (props) => {
    const {data} = props;
    return(
        <div>
            {
                            data.name === 'Liverpool' ?
                            <h1>❤</h1>:null
                        }
            <h1>{data.name} - {data.sys.country}</h1>
            <div className="data-left">
                    <li>
                        <ul>Feels Like: {data.main.feels_like}°C<span className="desc-logo">
                        {
                            data.main.feels_like < 10 ?
                            <FaTemperatureLow size="25"/>
                            : <FaTemperatureHigh size="25"/>
                        }</span></ul> 
                        <ul><p>Humidity: {data.main.humidity}% <span className="desc-logo"><WiHumidity size="40"/></span></p></ul> 
                        <ul><p>Pressure: {data.main.pressure} <span className="desc-logo"><WiBarometer size="40"/></span></p></ul>
                        <ul><p>Wind: {data.wind.speed}Mph <span className="desc-logo"><WiStrongWind size="40"/></span></p></ul>
                    </li>
                </div>
        </div>
         
    )
    
}
export default Display

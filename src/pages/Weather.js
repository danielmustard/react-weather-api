import React, { useState } from "react";
import './style.css'
import Display from './Display.js'


const Index = () => {
    const [form, setForm] = useState({
        location: ""
    });
    const handleChange = (event) => {
        let value = event.target.value

    setForm({...form, location:value})
    }
    const WeatherApi = (event) => {
        event.preventDefault();
        if (form.value === ""){
            alert ('You must enter a location')
        }
        const apiKey = 'eb8620a27a5d9121946b8dbc2c9b504f'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${form.location}&units=metric&appid=${apiKey}`
        fetch (url)
            .then (response =>{
                if (!response.ok) { throw response }
                return response.json()
            })
            .then (data => setWeather({
                data:data
            }))
            .catch ((error) =>{
                console.log(error);
            });
      }
    const [weather, setWeather] = useState([
        
    ])
    return (
    <div>
        <div className="center-title">
                <h1>Enter your nearest City.</h1>
            </div>
            <div className="search-input">
            {/* Form start */}
            <form>
                <input placeholder="Location" className="locationBox" type="text" name="location" onChange={event => handleChange(event)} ></input>
                <br/>
                <br/>
                <input type="submit" value="Submit" className="getWeather" onClick={event => WeatherApi(event)}/>
            </form>

            {
                weather.data !== undefined ?
                    <div>
                        <Display data={weather.data}/>
                    </div>
                
                :null
            }
            {

            }

            </div>
        </div>
    )
}

export default Index;
import React, { useState } from 'react';
import { dateBuilder } from "../../utils/dateBuilder";
import axios from 'axios';

export const Weather = props => {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});

    const getWeatherData = async evt => {
        if(city == '') return;
        if(evt.key === 'Enter') {
            const res = await axios.get(`${WEATHER_URL}${city}`);
            console.log(res.data);
            setWeather(res.data);
            setCity('');
        }
    };

    return (
        <main className={ (typeof weather.main != 'undefined') ? (weather.main.temp > 17) ? 'app warm' : 'app' : 'app' }>
            <div className="search-box">
                <input onChange={ event => setCity(event.target.value) }
                       onKeyPress={ getWeatherData }
                       value={ city } type="text"
                       placeholder="Search..."
                       className="search-input"
                />
            </div>

            { (typeof weather.main != 'undefined') ? (
                <div>
                    <div className="location-box">
                        <p className="location">
                            { weather.name }, { weather.sys.country }
                        </p>
                        <p className="date">
                            { dateBuilder(new Date()) }
                        </p>
                    </div>

                    <div className="weather-box">
                        <p className="temperature">
                            { Math.round(weather.main.temp) } &deg;C
                        </p>
                        <p className="conditions">
                            { weather.weather[0].description }
                        </p>
                    </div>
                </div>
            ) : null }
        </main>
    );

};


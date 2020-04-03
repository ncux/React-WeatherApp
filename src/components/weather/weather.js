import React from 'react';


export const Weather = props => {

    const dateBuilder = d => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${month} ${date} ${year}`
    };

    return (
        <main className="">
            <div className="search-box">
                <input type="text" placeholder="Search..." className="search-input" />
            </div>

            <div className="location-box">
                <div className="location">
                    New York City, US
                </div>
                <div className="date">
                    { dateBuilder(new Date()) }
                </div>
            </div>

            <div className="weather-box">
                <div className="temperature">
                    25 &deg;C
                </div>
                <div className="conditions">
                    Sunny
                </div>
            </div>
        </main>
    );

};


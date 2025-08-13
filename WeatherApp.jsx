import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]= useState({
        feelsLike: 35.28,
        humidity: 69,
        name: "WonderLand",
        temp: 30.2,
        tempMax: 30.2,
        tempMin: 30.2,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign :"center"}}>
            <h2>Weather App </h2>
            <h3>Check your city's weather now!</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        
    );
}
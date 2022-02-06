import React, { useState,  useEffect } from 'react'
import { LocationSearch } from '../LocationSearch/LocationSearch';
import { WeatherDay } from '../WeatherDay/WeatherDay';
import './styles.modules.css';

export const App = () => {

  const [locationKey, setLocationKey] = useState('')
    const [weatherInfo, setWeatherInfo] = useState()
    const [name,setName] = useState('')
    const days = 7
 
   
    useEffect(() => {
         const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesdsy',
      'Thursday',
      'Friday',
      'Saturday',
  
    ]
        if (locationKey) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${locationKey},de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=${days}`)
            .then(res => res.json())
         
            .then(res => {
            console.log()
            setWeatherInfo(res.list.map(lst => {
                return {
                    min: lst.main.temp_min,
                    max: lst.main.temp_max,
                    weatherType: lst.weather[0].description,
                    imgNum: lst.weather[0].icon,
                    dayOfWeek:daysOfWeek[new Date(lst.dt_txt).getDay()]
                }
            }))})
         
     
        }
              
    },[locationKey])
    



    return (
        <div>
        <LocationSearch
                onCityFound={cityInfo => {
                    setLocationKey(cityInfo.name)
                    setName(cityInfo.name)
        }}
            />
              <h1 className='header'>{name}</h1>
          <div className='main'>
        
          {!!weatherInfo&&weatherInfo.map((i, index) => (
            <div className='day' key={index}>
                <WeatherDay
                    min={i.min}
                    max={i.max}
                    imgNum={i.imgNum}
                    weatherType={i.weatherType}
                    dayOfWeek = {i.dayOfWeek}
                />
            </div>
          ))
            }</div>
        </div>
    
    )
    ;}
 

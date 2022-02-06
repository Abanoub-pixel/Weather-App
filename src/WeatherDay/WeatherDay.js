export const WeatherDay = ({ min, max, imgNum, weatherType,dayOfWeek }) => {
  
    return (
        <>
        <div>{dayOfWeek}</div>
        <img src={`http://openweathermap.org/img/wn/${imgNum}@2x.png`} alt={imgNum}/>
          <div>Status: { weatherType}</div>
          <div>Min: {min} Max: {max}</div>
       </>);
}
 

import { useState } from "react";
import styles from './styles.module.css'
export const LocationSearch = ({onCityFound}) => {

    const [zipCode, setZipCode] = useState('')

    const getLocation = (zip) => {
        console.log(zip)
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${zip},de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=5`;
        fetch(url)
            .then(res => res.json())
            .then(res =>{ 
                onCityFound({
                name: res.city.name
            })
              setZipCode('')
            })
            }
    return (  
        <div className={styles.main}>

            <input
                placeholder = 'Deutschland City Name'
                value={zipCode}
                onChange={e=>setZipCode(e.target.value)}
            />
            <button onClick={()=>getLocation(zipCode)}>Search</button>
        </div>
    );
}
 

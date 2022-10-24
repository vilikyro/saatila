import { useEffect, useState} from 'react';
import axios from 'axios'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const ICON_URL = 'http://openweathermap.org/img/wn/'
const API_KEY ='b184e2f4caf7a8b5c030a197b11928c0'

    
function Weather({lat,lng}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirecton] = useState(0);
    const [icon, setIcon] = useState('');
    const [description, setDescription] = useState(0);

    useEffect(() =>{

        const address = API_URL +
        'lat=' + lat +
        '&lon=' + lng +
        '&units=metric' +
        '&appid=' + API_KEY;

        console.log(address);

        axios.get(address)
        .then((response) => {
            console.log(response.data);
            setTemp(response.data.main.temp);
            setSpeed(response.data.wind.speed);
            setDirecton(response.data.wind.deg);
            setDescription(response.data.weather[0].description);
            setIcon(ICON_URL +response.data.weather[0].icon + '@2x.png');
            console.log(ICON_URL +response.data.weather[0].icon + '@2x.png');
        }).catch (error => {
            alert(error);
        });
    }, [])



    return (
    <>
    <h3>Weather on your location</h3>
    <p>{temp} C&#176;</p>
    <p>{speed} m/s {direction} degrees</p>
    <p>{description}</p>
    <img src={icon} alt=""/>
    </>
    );
}

export default Weather;
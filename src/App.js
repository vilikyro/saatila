import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)

      },(error) =>{
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    } else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])

  if(isLoading) {
    return <p>Ladataan sijaintiasi...</p>
  } else {
  return (
   <div>
    <p>Sijaintisi: {latitude}, {longitude}</p>
    <Weather lat={latitude} lng={longitude}/>
   </div>
  );
}}

export default App;

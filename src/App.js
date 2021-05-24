import { useState, useEffect } from 'react'
import Forecast from './Forecast'
import './app.css'
function App() {

  const [ latitude, setLatitude ] = useState()
  const [ longitude, setLongitude ] = useState()
  const [ weather, setWeather ] = useState()

  //call the weather api
 

  //Get the current location of the user when the component mounts
  useEffect(()=>{



    navigator.geolocation.getCurrentPosition((position)=>{

      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)

    })

    const getWeather = async () =>{

      if(longitude && latitude){

        await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res=>res.json())
        .then(data => setWeather(data))
      }
  }
    
    getWeather()

  }, [latitude,longitude])




let showForecastComp
if(weather){
  showForecastComp = <Forecast weatherData={weather} />
}else{
  showForecastComp = <div>Getting Weather Data...</div>
}

  return (
    <div className="App">


      {showForecastComp}
    </div>
  );
}

export default App;

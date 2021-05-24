import './app.css'
function Forecast({
    weatherData
}){
    console.log(weatherData)
    //convert the temperature from Kelvin to Fareheit
    let temp = Math.round(1.8 * (weatherData.main.temp - 273) + 32)
    let description = weatherData.weather[0].description
    let feelsLike = Math.round(1.8 * (weatherData.main.feels_like - 273) + 32)
    let low = Math.round(1.8 * (weatherData.main.temp_min - 273) + 32)
    let high = Math.round(1.8 * (weatherData.main.temp_max - 273) + 32)





    //Display the location, the temperature, a short description of the weather, and and an icon corresponding with the weather
    return(

        <div id="forecastContainer">
            <header id="locationHeader">{weatherData.name}</header>
            <section id="weatherSection">
            
                <div id= "weatherText">
                    <p id= "temperature">{temp}&deg;F</p>
                    <p id= "weatherDescription">{description}</p>
                </div>
                <img id="weatherIcon" src={`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0].icon}.png`} alt=""/>
                <div id="lowerWeatherText">
                    <p>Feels Like: {feelsLike}&deg;F</p>
                    <p>Low: {low}&deg;F</p>
                    <p>High: {high}&deg;F</p>
                </div>

            </section>

        </div>


    )

}
export default Forecast
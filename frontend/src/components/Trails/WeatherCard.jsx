import './WeatherCard.css'

function WeatherCard({ day }) {
    return (
        <div className="weather-card">
            <h3>{new Date(day.dt * 1000).toLocaleDateString()}</h3> {/* Display the date */}
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <p>Temp: {day.temp.day} °C</p>
            <p>Weather: {day.weather[0].main}</p>
            <p>Wind: {day.wind_speed} m/s</p>
            <p>Humidity: {day.humidity}%</p>
        </div>
    );
}

export default WeatherCard;

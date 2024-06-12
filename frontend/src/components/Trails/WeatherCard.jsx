import './WeatherCard.css'

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    });
}

function WeatherCard({ day }) {
    const formattedDate = formatDate(day.dt);

    return (
        <div className="weather-card">
            <h3>{formattedDate}</h3>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <p>Temp: {day.temp.day} °F</p>
            <p>Weather: {day.weather[0].main}</p>
            <p>Wind: {day.wind_speed} m/s</p>
            <p>Humidity: {day.humidity}%</p>
        </div>
    );
}

export default WeatherCard;
window.onload = function() {
    getWeather("Delhi");
  
    // Fetch weather for static cities
    const cities = ["Shanghai", "Boston", "Lucknow", "Kolkata"];
    cities.forEach(city => {
      getCityWeather(city.toLowerCase());
    });
  };
  
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    getWeather(city);
  });
  
  function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}&aqi=no`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("cityName").innerText = city;
        document.getElementById("temp").innerText = data.current.temp_c;
        document.getElementById("min_temp").innerText = data.forecast.forecastday[0].day.mintemp_c;
        document.getElementById("max_temp").innerText = data.forecast.forecastday[0].day.maxtemp_c;
        document.getElementById("cloud_pct").innerText = data.current.cloud;
        document.getElementById("feels_like").innerText = data.current.feelslike_c;
        document.getElementById("humidity").innerText = data.current.humidity;
        document.getElementById("wind_speed").innerText = data.current.wind_kph;
        document.getElementById("sunrise").innerText = data.forecast.forecastday[0].astro.sunrise;
        document.getElementById("sunset").innerText = data.forecast.forecastday[0].astro.sunset;
      })
      .catch(error => console.log(error));
  }
  
  function getCityWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}&aqi=no`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById(`${city}_cloud_pct`).innerText = data.current.cloud;
        document.getElementById(`${city}_feels_like`).innerText = data.current.feelslike_c;
        document.getElementById(`${city}_humidity`).innerText = data.current.humidity;
        document.getElementById(`${city}_max_temp`).innerText = data.forecast.forecastday[0].day.maxtemp_c;
        document.getElementById(`${city}_min_temp`).innerText = data.forecast.forecastday[0].day.mintemp_c;
        document.getElementById(`${city}_sunrise`).innerText = data.forecast.forecastday[0].astro.sunrise;
        document.getElementById(`${city}_sunset`).innerText = data.forecast.forecastday[0].astro.sunset;
        document.getElementById(`${city}_temp`).innerText = data.current.temp_c;
        document.getElementById(`${city}_wind_degrees`).innerText = data.current.wind_degree;
        document.getElementById(`${city}_wind_speed`).innerText = data.current.wind_kph;
      })
      .catch(error => console.log(error));
  }
  
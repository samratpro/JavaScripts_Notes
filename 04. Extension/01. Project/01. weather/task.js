const apiKey = 'd77d47820c0a5f555ff04f55fbd0bc07';
const Celcious = kelvin => parseInt(kelvin - 273.15)
    
const getLocation = function(position){

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('Country').innerText = `Country : ${data.sys.country}`;
        document.getElementById('City').innerText = `City : ${data.name}`;
        document.getElementById('Temp').innerText = `Temperature : ${Celcious(data.main.temp)}\u00B0C`;
        document.getElementById('Feels').innerText = `Feels Like : ${Celcious(data.main.feels_like)}\u00B0C`;
    })
}

navigator.geolocation.getCurrentPosition(getLocation)
// he getCurrentPosition method takes up to three arguments:
// successCallback: A function that will be called if the position is successfully retrieved.
// errorCallback (optional): A function that will be called if there's an error in obtaining the position.
// options (optional): An object to configure the request (like enableHighAccuracy).

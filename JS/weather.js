const APIKey = "be8d7b45394618c392543b17ef08b53d";

function onGeoOk(position){
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;
     console.log(lat, lng);
     const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&appid=${APIKey}&unit=metric`
     fetch(url)
     .then(response => response.json())
     .then(data => {
         const weather = document.querySelector("#weather span:first-child");
         const city = document.querySelector("#weather span:last-child");
        city.innerText =  data.list[0].name;
        weather.innerText = `${data.list[0].weather[0].main} \ ${data.list[0].main.temp}`;
     });
}
function onGeoError(){
    alert("Can`t find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



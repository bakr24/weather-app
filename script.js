const apiKey = "fa394bd674a87d1a3df458ff20ccaedc";

const cityInput =document.getElementById("cityInput");
const searchBtn =document.getElementById("searchBtn");

const city =document.getElementById("city");
const temperature= document.getElementById("temperature");
const description= document.getElementById("description");
const humidity =document.getElementById("humidity");
const wind= document.getElementById("wind");

searchBtn.addEventListener("click", () => {

    const cityName=cityInput.value.trim();

    if(cityName===""){
        alert("Please enter a city.");
        return;
    }

    getWeather(cityName);

});

async function getWeather(cityName){

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    }
    catch(error){
        alert(error.message);
    }
}
function displayWeather(data){
    city.textContent = data.name;
    temperature.textContent= `${Math.round(data.main.temp)} °C`;
    description.textContent= data.weather[0].description;
    humidity.textContent =data.main.humidity;
    wind.textContent =data.wind.speed;

}
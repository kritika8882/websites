const API_KEY = `abf20c46d6764d1baf995527263108`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (city) => {
    weather.innerHTML=` <div class="loading" ></div>
        <h2>Loading...</h2>`
    const url = `http://api.weatherapi.com/v1/current.json?key=abf20c46d6764d1baf995527263108&q=${city}&aqi=yes`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data)
}

const showWeather = (data) =>{
    console.log(data)
    if(data.code== "1006"){
        weather.innerHTML = `<h2> No matching location found.</h2>`
        return;
    }else{

        weather.innerHTML = `
            <div>
                <img src=${data.current.condition.icon} " alt="" style="height: 90px; width: 90px; margin-right: 20px;">
            </div>
            <div>
                <h2>${data.current.temp_c}&deg;C</h2>
                <h4>${data.current.condition.text}</h4>
            </div>
        `
    }   

    
    
}

form.addEventListener("submit", (event) => {
    getWeather(search.value)
    event.preventDefault();
}
)
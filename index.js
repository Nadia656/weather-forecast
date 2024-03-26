const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "c336b6acc576a7d4ca707860092ddd61"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resRecieved = await res.json(); 
    displayResult(resRecieved);
}
 
function displayResult(resRecieved){

    let city = document.querySelector("#city");
    city.textContent = `${resRecieved.name}, ${resRecieved.sys.country}`;

    getOurDate();

    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resRecieved.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels like: " + `${Math.round(resRecieved.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${resRecieved.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min: " + `${Math.round(resRecieved.main.temp_min)}<span>°</span>` + "Max: " + `${Math.round(resRecieved.main.temp_max)}<span>°</span>`;

}

function getOurDate(){

const myDate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[myDate.getDay()];
let todayDate = myDate.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[myDate.getMonth()];
let year = myDate.getFullYear();

let showDate = document.querySelector("#date");
showDate.textContent = `${day}`+ " " + `${todayDate}` + " " + `${month}` + " " + `${year}`;
}

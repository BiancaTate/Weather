"use strict"
let cities = [
    {
        name: "Benbrook, TX",
        latitude: 32.6732,
        longitude: -97.4606
    },
    {
        name: "Dallas, TX",
        latitude: 32.760200,
        longitude: -96.789306

    },

    {
        name: "Atlanta,GA",
        latitude: 33.750132,
        longitude: 84.358347
    },
    {
        name: "Athens,GA",
        latitude: 33.956236,
        longitude: -83.332818
    },
    {
        name: "Charlotte, NC",
        latitude: 35.244215,
        longitude: -80.837155
    },
    {
        name: "Raleigh,NC",
        latitude: 35.787418,
        longitude: -78.635461

    }

];

window.onload = function (_event) {



    let citySelect = document.getElementById("citySelect")
    citySelect.onchange = renderForecast

    showCity(cities, citySelect)

}

function showCity(cities, selectElement) {
    let html = `<option>Choose an Option</option>`
    for (let index = 0; index < cities.length; index += 1) {
        let city = cities[index].name
        html += `<option value="${city}">${city}</option>`
    }


    selectElement.innerHTML = html
}
// let table = document.getElementById("userTable"); 
//fetch("http://jsonplaceholder.typicode.com/users")
//  .then(response => response.json()) 
//  .then(data => {
//         for(let i=0; i<data.length; i++) {
//            let row = table.insertRow(-1);
//            let cell1 = row.insertCell(0);
//            let cell2 = row.insertCell(1);
//            cell1.innerHTML = data[i].name;
//            cell2.innerHTML = data[i].email;
// } });

function renderForecast(event) {
    let userChoice = event.target.value
    let stationLookupUrl = ""
    for (let index = 0; index < cities.length; index += 1) {
        let city = cities[index].name
        let latitude = cities[index].latitude
        let longitude = cities[index].longitude

        if (city === userChoice) {
            stationLookupUrl += `https://api.weather.gov/points/${latitude},${longitude}`
        }
        //    console.log(stationLookupUrl) 
    }

    fetch(stationLookupUrl)
        .then(response => response.json())
        .then(data => {
            let weatherUrl = data.properties.forecast;
            getWeather(weatherUrl);
            
        })


}

function getWeather(weatherUrl) {
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            let forecastArray = data.properties.periods;
            displayWeather(forecastArray);
            
        })
}

function displayWeather(forecastArray){
    console.log("ugh")

}
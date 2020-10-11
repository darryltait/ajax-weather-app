
// Constants and variables
const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';



// Cached element references


// Event listeners


// Functions

// q={city name}&appid={API key}

function handleGetData() {
    $.ajax(BASE_URL + 'q=Denver&units=imperial&appid=' + API_KEY)
    .then(function(data){
console.log('Data: ', data)
    }, function(error){
        console.log('Error: ', error);
    })
}

handleGetData()
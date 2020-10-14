
// Constants and variables
const API_KEY = '5e4aaf5b3ef2e1914454e2c7d4ecf140';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

let userInput, weatherData;


// Cached element references
const $city = $('#city');
const $temp = $('#temp');
const $index = $('#index');
const $desc = $('#desc');
const $img = $('img');
const $form = $('form');
const $userInput = $('input[type="text"]');


// Event listeners
$form.on('submit', handleGetData);

// Functions

// q={city name}&appid={API key}

function handleGetData(event) {
    event.preventDefault();
    
    userInput = $userInput.val();
    if(!userInput) return; 

    $.ajax(BASE_URL + 'q=' + userInput + '&units=imperial&appid=' + API_KEY)
    .then(function(data){
        weatherData = data;
        render();

    }, function(error){
        console.log('Error: ', error);
    });
}

function render() {
    $city.text('Weather for: ' + weatherData.name);
    $temp.text('Temperature: ' + Math.round(weatherData.main.temp));
    $index.text('Feels like: ' + Math.round(weatherData.main.feels_like));
    $desc.text('Weather: ' + weatherData.weather[0].description);
    $img.attr('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
    $userInput.val('');
    console.log('Weather data: ', weatherData)
}


/*
Data:  */


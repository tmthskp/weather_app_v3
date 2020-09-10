/*OPENWEATHERMAP SCRIPT*/

//--Formular input specifik data fra openmap
function openWeatherMapScriptCityNameInput()
{
    var formInput = document.getElementById("city_name").value
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+`${formInput}`+"&appid=8d25bcbc04528882c5fbe036421e9aeb"
    
    fetch(url)
    .then(data=>data.json())
    .then(SendDatatoPage)  
        
}

//-- Kald af elementer til visning på html site--
function SendDatatoPage(data)
{
    var land = data.sys.country
    var city = data.name
    var wind = data.wind.speed
    var tempratur = Math.floor(data.main.temp) - 272
    var {icon} = data.weather[0]
    var pil = data.wind.deg

    document.getElementById("land").innerHTML = `${land}`
    document.getElementById("by_navn").innerHTML = `${city}`
    document.getElementById("vind_styrke").innerHTML = `${wind}`  
    document.getElementById("temperatur").innerHTML = `${tempratur}°` 
    document.getElementById("wind_angle").innerHTML = `<img src="image/pil.png" style=" transform: rotate(${pil}deg); width: 100px"/>`
    
    document.getElementById("icons").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@4x.png" style="width: 150px"/>`
    document.getElementById("icons_2").innerHTML = `<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg" style="width: 150px"/>`
    document.getElementById("icons_3").innerHTML = `<img src="icons/${icon}.png" style="width: 150px"/>`
    
}

/*NOTER*/
//var iconurl = "http://openweathermap.org/img/wn/10d@2x.png" //--Dette er standard URL link til openweathermap iconer--

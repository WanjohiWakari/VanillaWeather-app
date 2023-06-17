function formatDate(timeStamp){//number of milliseconds since 1970
let date = new Date(timeStamp);
let hours = date.getHours();
if (hours<10){
  hours=`0${hours}`;
}
let minutes = date.getMinutes();
if (minutes<10){
  minutes=`0${minutes}`;
}
let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"]
let day = days[date.getDay()];

    return `${day} ${hours}: ${minutes}`;
}
function displayTemparature(response){
   //console.log(response.data);
   let temparatureElement=document.querySelector("#temparature");
   temparatureElement.innerHTML=Math.round(response.data.main.temp);
   let cityElement= document.querySelector("#city");
    cityElement.innerHTML=response.data.name;
    let descriptionElement=document.querySelector("#description");
    descriptionElement.innerHTML= response.data.weather[0].description;
    //console.log(descriptionElement);
    let humidityElement=document.querySelector("#humidity");
    humidityElement.innerHTML=response.data.main.humidity;
    //console.log(humidityElement);
   let windElement=document.querySelector("#wind");
   windElement.innerHTML=Math.round(response.data.wind.speed);
  //console.log(windElement);
  let dateElement=document.querySelector("#date");
  dateElement.innerHTML=formatDate(response.data.dt*1000 );//convert mins to miliseconds
  let iconElement=document.querySelector("#icon");
  iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
   //console.log(iconElement);
   iconElement.setAttribute(
    "alt", response.data.weather[0].description
   );//seting alt text as description

}
function search (city){ //makes Ajax call
  let apiKey="b42d2c4be99c58640c37a2d33565fcbe";
 let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemparature);
}
function handleSubmit(event) //to receive and event (eventListener always has an event)
{
  event.preventDefault(); //prevent page from reloading
let cityInputElement=document.querySelector("#city-input");
search(cityInputElement.value);
console.log(cityInputElement);
}

search("Nairobi") // calling funtion New York will be the default city
let form = document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);
 
function displayTemparature(response){
   console.log(response.data);
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
    
}


let apiKey="b42d2c4be99c58640c37a2d33565fcbe";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemparature);

 
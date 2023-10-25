const city_name= document.querySelector(".weather");
const temp= document.querySelector(".temp");
const searchField = document.querySelector(".search");
const form = document.querySelector(".btn");
const image =document.querySelector('.image');
// console.log(temp.innerHTML);
// console.log("hello")
const bg= document.querySelector(".bg");
    

let target = "delhi";
form.addEventListener("click", search);
function search(e) {
    e.preventDefault();
  
    target = searchField.value;
    
    fetchData(target);
  }
function fetchData(){
    let url= `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${target}`;
    fetch(url).then( resp =>resp.json()).then(result => {
        var city =result.location.name;
        var temp_ce =result.current.temp_c;
        // console.log (result);
          console.log(result);
        city_name.innerHTML =city;
        temp.innerHTML=temp_ce +"°C";
        var img =result.current.condition.icon;
        image.src=img
        //// bg change//

        var rain =result.current.precip_mm;
        var wind= result.current.wind_mph;
        // console.log (rain);
        var set_weather="/weather_website/img/rain2.jpg";
        if (rain>0 && rain<10){
            set_weather="/img/raning.jpg"
        }
        else if (rain>10 && rain<20){
            set_weather="/img/rain3.jpg"
        }
        else if (rain>20 && rain<35){
            set_weather="/img/clear.jpg"
        }
        else if (temp_ce>25 && temp_ce<35){
            set_weather="/img/clear.jpg"
        }

        else if (temp_ce>35 && temp_ce<55){
            set_weather="/img/sun.jpg"
        }
        
        // console.log (`url('https://source.unsplash.com/random/1400×700/?${ set_weather})`);
        document.body.style.backgroundImage=`url('${ set_weather}')`

    })
    .catch((error)=> alert( "City Not Found"))
}
fetchData();

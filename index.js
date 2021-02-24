async function getWeatherData(cityName){
 try{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f1d1956cb4b3c20b922c88c3ce784572`, {mode : 'cors'});
    let data = await response.json();
    console.log(data);
    //console.log (`Weather in ${cityName} is : ${data.main.temp} Farhenheit`);
    console.log (`Weather in ${cityName} is : ${Math.round(data.main.temp -273)} Celsius`);
    dataArea.innerHTML = (`Weather in ${cityName} is : ${Math.round(data.main.temp -273)} Celsius`);
    if((data.main.temp-273) <= 20){
        dataArea.style.cssText ="background-color: #44c3c382";
    }else{
        dataArea.style.cssText ="background-color: #fbb66c";
    }
 }catch(error){
     console.log('We got an error :(');
 } 
}

//DOM manipulation


const dataArea = document.querySelector (".display-data");


const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener('click' , ()=>{
    let cityBox = document.querySelector(".input-boxes");
    let city = cityBox.value;
    console.log(city);
    // let weatherData = getWeatherData(cityf);
    // console.log(weatherData);
    return getWeatherData(city);
    
})

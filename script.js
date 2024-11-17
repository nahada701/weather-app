
let lightmode=true
let darkmode=false
const lightmodeOn=()=>{
    lightmode=true
    darkmode=false
    document.getElementById("highandlow").classList.remove("highlowNight")
    document.getElementById("highandlow").classList.add("highlow")

    document.getElementById("searchbtn").classList.remove("highlowNight")
    document.getElementById("searchbtn").classList.add("highlow")

    
    document.getElementById("main").classList.remove("mainNight")
    document.getElementById("main").classList.add("main")


    document.getElementById("outputbox").classList.remove("boxNight")
    document.getElementById("outputbox").classList.add("box")
    

}



const darkmodeOn=()=>{
    lightmode=false
    darkmode=true
    document.getElementById("highandlow").classList.add("highlowNight")
    document.getElementById("highandlow").classList.remove("highlow")

    document.getElementById("searchbtn").classList.add("highlowNight")
    document.getElementById("searchbtn").classList.remove("highlow")

    
    document.getElementById("main").classList.add("mainNight")
    document.getElementById("main").classList.remove("main")


    document.getElementById("outputbox").classList.add("boxNight")
    document.getElementById("outputbox").classList.remove("box")
    

}


const getData=async()=>{
   
    if(placeInput.value==""){
        alert("Please enter a country name")
    }
    else{
    
        try{
            let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeInput.value}&appid=5b4bee0ba241d092159faf007e166080`)
            data=await data.json();
            console.log(data);  
            //Celsius=Kelvin−273.15  
            //place
            const place=data.name
            //country
            const country=data.sys.country
            //temp
            const temp=celsius(data.main.temp)
            
            //feelslike
            const feelslike=celsius(data.main.feels_like)

            const maxtemp=celsius(data.main.temp_max)
            const mintemp=celsius(data.main.temp_min)

           

          let dateAndTimeStamp=data.dt
          let sunrise=data.sys.sunrise
          let sunset=data.sys.sunset
          let timezone=data.timezone
    //date and time
          const currentDateTime = convertUnixToLocalDateTime(dateAndTimeStamp, timezone);
         //sunrise
          const sunriseTime = convertUnixToLocalTime(sunrise, timezone);
         //sunset
          const sunsetTime = convertUnixToLocalTime(sunset, timezone); 
          //humidity
          const humidity=data.main.humidity
          //pressure
          const pressure=data.main.pressure
          //wind
          const wind=data.wind.speed
          //weather
          const weather=capitalizeFirstLetter(data.weather[0].description)
          
        
          if(lightmode){
            displayoutput.innerHTML=` <div class="row  box  py-5 p-md-5 " id="outputbox">
            <div class="col-md-6 leftdata">
                <h5><i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> <span id="Place">${place}</span>, <span id="country">${country}</span></h5>
                <p  class="date-and-time"> <span id="date">${currentDateTime} </p>
                <h1 id="temp" style="font-size: 10vw;">${temp}<sup style="font-size: 6vw;">°c</sup></h1>

                
                <p>Feels like <span id="feels" class="pb-3"> ${feelslike} <sup>°c</sup> </span></p>
               
                <span class="highlow" id="highandlow">
                    <span id="high"> &#8593; ${maxtemp}<sup>°c</sup></span>
                    <span id="low"> &#8595; ${mintemp}<sup>°c</sup></span>

                </span>
            </div>
            <div class="col-md-6  d-flex flex-column align-items-start justify-content-around pt-3 pt-md-0 " style="padding-left: 4rem !important">
                <h4 id="sky"> ${weather} <i class="fa-solid fa-cloud-sun-rain"style="color: #ffffff;"></i></h4>
                <p class="p-0 m-0"><i class='bx bx-sun'></i> ${sunriseTime}</p>
                <p class="p-0 m-0"><i class='bx bx-moon'></i> ${sunsetTime}</p>
                

               <div class="each">
                    <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class="fa-solid fa-droplet" style="color: #ffffff;"></i>Humidity</span>
                    <span id="humidity">${humidity}%</span>
               </div>
               
                <div class="each">
                    <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class='bx bxs-tachometer' style="color: #ffffff;"></i>Pressure</span>
                    <span id="pressure">${pressure}</span>
                </div>
                <div class="each">
                    <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class="fa-solid fa-wind" style="color: #ffffff;"></i>Wind</span>
                    <span id="wind">${wind} kmph</span>
                </div>
            </div>
        </div> `
          }
          else{
            displayoutput.innerHTML=` <div class="row  boxNight  py-5 p-md-5 " id="outputbox">
                <div class="col-md-6 leftdata">
                    <h5><i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> <span id="Place">${place}</span>, <span id="country">${country}</span></h5>
                    <p  class="date-and-time"> <span id="date">${currentDateTime} </p>
                    <h1 id="temp" style="font-size: 10vw;">${temp}<sup style="font-size: 6vw;">°c</sup></h1>

                    
                    <p>Feels like <span id="feels" class="pb-3"> ${feelslike} <sup>°c</sup> </span></p>
                   
                    <span class="highlowNight" id="highandlow">
                        <span id="high"> &#8593; ${maxtemp}<sup>°c</sup></span>
                        <span id="low"> &#8595; ${mintemp}<sup>°c</sup></span>
    
                    </span>
                </div>
                <div class="col-md-6  d-flex flex-column align-items-start justify-content-around pt-3 pt-md-0 " style="padding-left: 4rem !important">
                    <h4 id="sky"> ${weather} <i class="fa-solid fa-cloud-sun-rain"style="color: #ffffff;"></i></h4>
                    <p class="p-0 m-0"><i class='bx bx-sun'></i> ${sunriseTime}</p>
                    <p class="p-0 m-0"><i class='bx bx-moon'></i> ${sunsetTime}</p>
                    

                   <div class="each">
                        <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class="fa-solid fa-droplet" style="color: #ffffff;"></i>Humidity</span>
                        <span id="humidity">${humidity}%</span>
                   </div>
                   
                    <div class="each">
                        <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class='bx bxs-tachometer' style="color: #ffffff;"></i>Pressure</span>
                        <span id="pressure">${pressure}</span>
                    </div>
                    <div class="each">
                        <span class="d-flex align-items-center gap-1" style="border-bottom: 1px white solid;"> <i class="fa-solid fa-wind" style="color: #ffffff;"></i>Wind</span>
                        <span id="wind">${wind} kmph</span>
                    </div>
                </div>
            </div> `
          }

          
          
                }
        catch(error){
              displayoutput.innerHTML=` <div class="row  box  py-5 p-md-5 ">Place not found. Please try again.</div>`
              

            }
        }
}

const celsius=(temp)=>{

    return Math.round((temp-273.15))
}

// Function to convert Unix timestamp to a readable date and time string (for current time)
function convertUnixToLocalDateTime(unixTimestamp, timezoneOffset) {
    const adjustedTime = (unixTimestamp + timezoneOffset) * 1000;
    const localDate = new Date(adjustedTime);

    const day = localDate.getUTCDate();
    const month = localDate.getUTCMonth() + 1;
    const year = localDate.getUTCFullYear();

    let hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const dateString = `${day}-${month}-${year}`;
    const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    return `${dateString} ${timeString}`;
}

// Function to convert Unix timestamp to a readable time string (for sunrise and sunset)
function convertUnixToLocalTime(unixTimestamp, timezoneOffset) {
    const adjustedTime = (unixTimestamp + timezoneOffset) * 1000;
    const localDate = new Date(adjustedTime);

    let hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}




























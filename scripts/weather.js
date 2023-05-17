let ele = document.querySelectorAll(".visi");
for (let i = 0; i < ele.length; i++) {
  ele[i].classList.add("invisible");
}
let api = "http://api.weatherstack.com/current";
let accessKey = "33e69f70f7aa7620df64a3454904aef8"
let city;

let input = document.getElementById("location-input");
let searchInfo = document.querySelector(".search-btn")
searchInfo.addEventListener("click", () => {
  for (let i = 0; i < ele.length; i++) {
    ele[i].classList.remove("invisible");
  }
  for (let i = 0; i < ele.length; i++) {
    ele[i].classList.add("visible");
  }
  inputValue = input.value;
  api = api + `?access_key=${accessKey}` + `&query=${inputValue}`;

  console.log(inputValue)

  let apiCall = fetch(api);
  // console.log(apiCall);
  apiCall.then(
    function (value) {
      return value.json()
    }
  ).then(
    function (value) {
      console.log(value)
      // console.log(value.current.temperature)
      let Temp;
      Temp = value.current.temperature;
      let City = value.location.country;
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.add("visible");
      }
      document.querySelector(".tempRes").innerHTML = `Right Now in ${City} Temperature`;
      let temper = document.querySelector(".result");
      temper.innerHTML = `${Temp} ` + "&#8451";
      // let celsius = document.createElement("sub");
      // celsius.innerHTML = "&#8451";
      // temper.appendChild(celsius);
      // celsius.classList.add(".celsiu")
      document.querySelector("#moisture").innerHTML = `${value.current.wind_speed}` + "mph" + "(windspeed)";
      document.querySelector("#rain").innerHTML = `${value.current.weather_descriptions}`;
      document.querySelector("#humidity").innerHTML = `${value.current.humidity}` + "(humidity)";
    }
  )

})



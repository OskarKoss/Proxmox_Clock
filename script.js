function updateClock() {
    const now = new Date();

    const days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota"
    ];

    const dayName = days[now.getDay()];
    const date = now.toLocaleDateString("pl-PL");
    const time = now.toLocaleTimeString("pl-PL");

    document.getElementById("dzien").innerHTML = dayName;
    document.getElementById("data").innerHTML = date;
    document.getElementById("godzina").innerHTML = time;

}

setInterval(updateClock, 1000);
updateClock();


//////////////////////////////////////////////////////////////////

function updateWeather(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=YY.YY&longitude=XX.XX&current_weather=true")
  .then(res => res.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;

    document.getElementById("temp").innerHTML = `<i class="fa-solid fa-temperature-empty"></i> ${temp}°C`;
    document.getElementById("wiatr").innerHTML = `<i class="fa-solid fa-wind"></i> ${wind}km/h`;

  })
  .catch(() => {
    document.getElementById("pogoda").innerText = "Błąd pobierania danych";
  });


}

setInterval(updateWeather, 1800000) //30mins
updateWeather();


/////////////////////////////////////////////////////////////////////


const wlacznik_pm = document.getElementById("wlacznik_pm");
const reset_pm = document.getElementById("reset_pm");
const wlacznik_pc = document.getElementById("wlacznik_pm");





//////////////////////////////////////////////////////////////////////


const motyw = document.getElementById("motyw");
const wrapper = document.getElementById("wrapper");
const icon = motyw.querySelector("i");

motyw.addEventListener("click", function () {

    wrapper.classList.toggle("dark");

    if (wrapper.classList.contains("dark")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }


});

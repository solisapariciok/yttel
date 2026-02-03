// script.js

const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  61: "Slight rain",
  71: "Slight snow fall",
  80: "Rain showers",
  95: "Thunderstorm"
};

// Detect which page is open
if (document.title.includes("Temperature")) {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=-78&current=temperature_2m')
    .then(res => res.json())
    .then(data => {
      const temp = data.current.temperature_2m;
      document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
    })
    .catch(err => console.error(err));
}

if (document.title.includes("Conditions")) {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=-78&current=weathercode')
    .then(res => res.json())
    .then(data => {
      const code = data.current.weathercode;
      document.getElementById('condition').textContent = `Condition: ${weatherCodes[code] || "Unknown"}`;
    })
    .catch(err => console.error(err));
}

document.getElementById("currentyear").innerHTML = new Date().getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;

let temp = 44
let wind = 3

function calculateWindChill(tempuature, windSpeed) {
    if ((tempuature <= 50) && (windSpeed > 3)) {
        let windChill = 35.74 + (0.6215 * tempuature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempuature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    }
    else {
        return "N/A"
    }
}

document.getElementById("chillValue").textContent = calculateWindChill(temp, wind)
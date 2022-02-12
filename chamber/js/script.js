//last modified date and time

const themod = document.querySelector("#lastmod");
lastmod.textContent = `Page last updated: ${document.lastModified}`;

//Date for navigation

const datefield = document.querySelector(".today");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Hamberger menu

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

//Popup

let banner = document.querySelector("#banner");
let dayOfWeek = new Date().getDay();

if (dayOfWeek == 2 || dayOfWeek == 3) {
  banner.style.display = "block";
}

//Weather

let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let windchill = "";

if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#wind").innerHTML = windchill;

function windChill(temp, speed) {
  let value = Math.round(
    35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16)
  );
  return value;
}


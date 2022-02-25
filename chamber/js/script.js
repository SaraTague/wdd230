const themod = document.querySelector("#lastmod");
lastmod.textContent = `This page was last updated: ${document.lastModified}`;

year.innerHTML = new Date().getFullYear();


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

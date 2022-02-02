// Page last updated
const themod = document.querySelector("#lastmod");
lastmod.textContent = `Page last updated: ${document.lastModified}`;

const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside");

//current date

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

//Hamberger menu

function toggleMenu() {
    document
      .getElementsByClassName("navigation")[0]
      .classList.toggle("responsive");
  }
  
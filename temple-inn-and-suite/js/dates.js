const themod = document.querySelector("#lastmod");
lastmod.textContent = `Last updated: ${document.lastModified}`;

year.innerHTML = new Date().getFullYear();

//Date for navigation

const datefield = document.querySelector(".today");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;



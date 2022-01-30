const themod = document.querySelector("#lastmod");
lastmod.textContent = `Page last updated: ${document.lastModified}`;

year.innerHTML = new Date().getFullYear();

let today = new Date();
document.getElementById('displayDateTime').innerHTML=today;

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()

const button = document.querySelector('.btn')
button.addEventListener('click', () => {
    button.classList.toggle('liked')
})

function saveData(){ var input = document.getElementById("saveServer"); 
localStorage.setItem("server", input.value);
var storedValue = localStorage.getItem("server"); }




const lastvisit_text = window.localStorage.getItem("like");
if (lastvisit_text === undefined) {
  lastvisit_text = new Date(Data.now());
}
const lastvisit = Date.parse(lastvisit_text);
const FACTOR = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem("like", new Date(Date.now()));

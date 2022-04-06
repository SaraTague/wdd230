const requestURL = "data.json";
const cards = document.querySelector("div.cards");
const listButton = document.querySelector("#list-btn");
const cardButton = document.querySelector("#card-btn");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    // console.table(jsonObject);
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  let card = document.createElement("section");

  //img
  let image = document.createElement("img");
  image.src = business.imgfile;
  image.setAttribute("alt", business.name);
  card.appendChild(image);

  //h2 name
  let h3 = document.createElement("h3");
  h3.textContent = business.name;
  card.appendChild(h3);

  //p address
  let p1 = document.createElement("p");
  p1.textContent = business.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement("p");
  p2.textContent = business.phone;
  card.appendChild(p2);

  //p email
  let p3 = document.createElement("p");
  p3.textContent = business.email;
  card.appendChild(p3);

  //p history
  let p4 = document.createElement("p");
  p4.textContent = business.history;
  card.appendChild(p4);

  //p history
  let p5 = document.createElement("p");
  p5.textContent = business.history2;
  card.appendChild(p5);

  //p history
  let p6 = document.createElement("p");
  p6.textContent = business.history3;
  card.appendChild(p6);

  //p schedual
  let p7 = document.createElement("p");
  p7.textContent = business.schedule;
  card.appendChild(p7);

  cards.appendChild(card);
}

listButton.addEventListener("click", () => {
  cards.classList.replace("card-view", "list-view");
});

cardButton.addEventListener("click", () => {
  cards.classList.replace("list-view", "card-view");
});

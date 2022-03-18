const requestURL = "data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    let spotlight = businesses.filter(
      (a) => a.membership == "Gold" || a.membership == "Silver"
    );
    spotlight = spotlight.sort(() => Math.random() - 0.5);
    displaybusinesses(spotlight[0]);
    displaybusinesses(spotlight[1]);
    displaybusinesses(spotlight[2]);
  });

function displaybusinesses(businesses) {
  // setting the info
  let card = document.createElement("section");
  let imageLogo = document.createElement("img");
  let webLink = document.createElement("a");
  let imageMember = document.createElement("img");
  let memberLink = document.createElement("a");
  let name = document.createElement("p");

  name.innerText = `${businesses.name}`;

  //image js
  imageLogo.setAttribute("src", businesses.imgfile);
  imageLogo.setAttribute("alt", `${businesses.name} logo`);
  imageLogo.setAttribute("loading", "lazy");
  imageLogo.classList.add("card-logo");
  webLink.href = businesses.website;
  webLink.title = `Visit ${businesses.name} Website`;
  webLink.appendChild(imageLogo);

  
  card.appendChild(webLink);
  card.appendChild(name);

  if (
    businesses.membership.toLowerCase() == "gold" ||
    businesses.membership.toLowerCase() == "silver"
  ) {
    card.appendChild(memberLink);
  }
  card.classList.add("block");
  card.classList.add("shadow");
  card.classList.add("spotlight");

  document.querySelector("div.spotlights").appendChild(card);
}

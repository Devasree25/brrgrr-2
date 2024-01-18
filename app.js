// app.js
let patty = document.getElementById("patty");
let cheese = document.getElementById("cheese");
let tomatoes = document.getElementById("tomato");
let onion = document.getElementById("onion");
let lettuce = document.getElementById("lettuce");
var Patty = document.querySelector(".btn-patty");
var bcheese = document.querySelector(".btn-cheese");
var t_btn = document.querySelector(".btn-tomatoes");
var bonion = document.querySelector(".btn-onions"); // Corrected variable name
var l_btn = document.querySelector(".btn-lettuce");
var items = document.getElementsByClassName("items");
var Prize = document.getElementsByClassName("price-details")[0];
var prize = 0;

// Initial price of the burger
var wholeWheatBun = 10;

// Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 18, // Corrected cheese price
  Tomatoes: 17, // Corrected tomatoes price
  Onions: 17,
  Lettuce: 17
};

// Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
    Patty.classList.add("active");
    items[0].textContent = "Patty";
    prize += ingredients.Patty;
  } else {
    patty.style.display = "none";
    Patty.classList.remove("active");
    items[0].textContent = "";
  }
}

function renderCheese() {
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
    bcheese.classList.add("active");
    items[1].textContent = "Cheese";
    prize += ingredients.Cheese;
  } else {
    cheese.style.display = "none";
    bcheese.classList.remove("active");
    items[1].textContent = "";
  }
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
    t_btn.classList.add("active");
    items[2].textContent = "Tomatoes";
    prize += ingredients.Tomatoes;
  } else {
    tomatoes.style.display = "none";
    t_btn.classList.remove("active");
    items[2].textContent = "";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
    bonion.classList.add("active");
    items[3].textContent = "Onions";
    prize += ingredients.Onions;
  } else {
    onion.style.display = "none";
    bonion.classList.remove("active");
    items[3].textContent = "";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    l_btn.classList.add("active");
    items[4].textContent = "Lettuce";
    prize += ingredients.Lettuce;
  } else {
    lettuce.style.display = "none";
    l_btn.classList.remove("active");
    items[4].textContent = "";
  }
}

function renderPrice() {
  Prize.textContent = "INR " + prize; // Update the displayed price
}

// Update these variable names in your event listeners
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

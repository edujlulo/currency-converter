const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const exchangeRate = document.querySelector(".exchange-rate");
const imgConverter = document.getElementById("img-converter");

let exchangeRateValue;

// Exchange rate values

let rates = {
  "us-dollar": null,
  euro: null,
  "pound-sterling": null,
  "japanese-yen": null,
};

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    rates["us-dollar"] = data.rates.USD;
    rates["euro"] = data.rates.EUR;
    rates["pound-sterling"] = data.rates.GBP;
    rates["japanese-yen"] = data.rates.JPY;
    updateExchangeRate();
  });

const originalOptions = [
  { value: "pound-sterling", text: "Pound Sterling" },
  { value: "euro", text: "Euro" },
  { value: "us-dollar", text: "US Dollar" },
  { value: "japanese-yen", text: "Japanese Yen" },
];

// Calculation of exchange

input1.addEventListener("input", calculationInput2);

function calculationInput2() {
  const result = input1.value * exchangeRateValue;
  input2.value = Number(result.toFixed(2));
}

input2.addEventListener("input", calculationInput1);

function calculationInput1() {
  const result = input2.value / exchangeRateValue;
  input1.value = Number(result.toFixed(2));
}

// Assigning exchange rate value

let previousCurrency1 = menu1.options[0].value;
let previousCurrency2 = menu2.options[0].value;
let currentCurrency1 = menu1.options[0].text;
let currentCurrency2 = menu2.options[0].text;

updateExchangeRate();

menu1.addEventListener("change", () => {
  if (menu1.value === menu2.value) {
    menu2.value = previousCurrency1;
  }

  updateActualCurrencies();

  previousCurrency1 = menu1.options[menu1.selectedIndex].value;

  updateExchangeRate();
  calculationInput1();
});

menu2.addEventListener("change", () => {
  if (menu2.value === menu1.value) {
    menu1.value = previousCurrency2;
  }

  updateActualCurrencies();

  previousCurrency2 = menu2.options[menu2.selectedIndex].value;

  updateExchangeRate();
  calculationInput2();
});

function updateActualCurrencies() {
  currentCurrency1 = menu1.options[menu1.selectedIndex].text;
  currentCurrency2 = menu2.options[menu2.selectedIndex].text;
}

function updatePreviousCurrencies() {
  previousCurrency1 = menu1.options[menu1.selectedIndex].value;
  previousCurrency2 = menu2.options[menu2.selectedIndex].value;
}

function updateExchangeRate() {
  exchangeRateValue = rates[menu2.value] / rates[menu1.value];

  exchangeRate.textContent = `1 ${currentCurrency1} equals ${exchangeRateValue.toFixed(
    2
  )} ${currentCurrency2}`;
}

// Inverter inputs image event on click

imgConverter.addEventListener("click", invertInputs);

function invertInputs() {
  menu1.value = previousCurrency2;
  menu2.value = previousCurrency1;

  updatePreviousCurrencies();
  updateActualCurrencies();
  updateExchangeRate();

  input2.value = input1.value;
  calculationInput1();
}

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const exchangeRate = document.querySelector(".exchange-rate");
const imgConverter = document.getElementById("img-converter");

let exchangeRateValue;

// Currencies list

const currencies = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "Pound sterling",
  JPY: "Japanese Yen",
  CNY: "Chinese Renminbi",
  CAD: "Canadian dollar",
  AUD: "Australian dollar",
  CHF: "Swiss Franc",
  SGD: "Singapore Dollar",
  OMR: "Omani Rial",
};

// Generating the lists in menus

const entries = Object.entries(currencies);

entries.forEach(([value, str], index) => {
  let option1 = document.createElement("option");
  option1.value = value;
  option1.textContent = str;
  menu1.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = value;
  option2.textContent = str;
  menu2.appendChild(option2);
});

menu1.value = entries[0][0];
menu2.value = entries[1][0];

// Exchange rate values

let rates = {};

fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    rates = data.rates;
    updateExchangeRate();
    updateActualCurrencies();
    updatePreviousCurrencies();
  });

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
  updatePreviousCurrencies();

  updateExchangeRate();
  calculationInput1();
});

menu2.addEventListener("change", () => {
  if (menu2.value === menu1.value) {
    menu1.value = previousCurrency2;
  }

  updateActualCurrencies();
  updatePreviousCurrencies();

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
  dateMessage();
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

// Date message

const dateMessageElement = document.querySelector(".date-message");

function dateMessage() {
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      const utcDate = new Date(data.time_last_update_utc);

      const formattedDate = utcDate.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      dateMessageElement.textContent = `Last updated: ${formattedDate}`;
    })
    .catch((error) => {
      console.error("Error fetching date:", error);
      dateMessageElement.textContent = "Date unavailable";
    });
}

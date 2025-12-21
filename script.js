const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const exchangeRate = document.querySelector(".exchange-rate");

// Exchange rate values

const rates = {
  "us-dollar": 1,
  euro: 0.92,
  "pound-sterling": 0.79,
  "japanese-yen": 156,
};

const originalOptions = [
  { value: "pound-sterling", text: "Pound Sterling" },
  { value: "euro", text: "Euro" },
  { value: "us-dollar", text: "US Dollar" },
  { value: "japanese-yen", text: "Japanese Yen" },
];

// function updateMenus(changed, other) {
//   const selectedValue = changed.value;
//   other.innerHTML = ""; // Clean options from other menu

//   originalOptions.forEach((op) => {
//     if (op.value !== selectedValue) {
//       const option = document.createElement("option");
//       option.value = op.value;
//       option.textContent = op.text;
//       other.appendChild(option);
// //     }
// //   });

//   // If the last selection of the other menu was deleted, select the first available
//   if (![...other.options].some((opt) => opt.value === other.value)) {
//     other.selectedIndex = 0;
// //   }
// // }

// menu1.addEventListener("change", () => updateMenus(menu1, menu2));
// menu2.addEventListener("change", () => updateMenus(menu2, menu1));

// Calling the function once change

// updateMenus(menu1, menu2);
// updateMenus(menu2, menu1);

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
});

menu2.addEventListener("change", () => {
  if (menu2.value === menu1.value) {
    menu1.value = previousCurrency2;
  }

  updateActualCurrencies();

  previousCurrency2 = menu2.options[menu2.selectedIndex].value;

  updateExchangeRate();
});

function updateActualCurrencies() {
  currentCurrency1 = menu1.options[menu1.selectedIndex].text;
  currentCurrency2 = menu2.options[menu2.selectedIndex].text;
}

function updateExchangeRate() {
  exchangeRate.textContent = `1 ${currentCurrency1} equals ${(
    rates[menu2.value] / rates[menu1.value]
  ).toFixed(2)} ${currentCurrency2}`;
}

let exchangeRateValue = 123;

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const exchangeRate = document.querySelector(".exchange-rate");

const originalOptions = [
  { value: "pound-sterling", text: "Pound Sterling" },
  { value: "euro", text: "Euro" },
  { value: "us-dollar", text: "US Dollar" },
  { value: "japanese-yen", text: "Japanese Yen" },
];

function updateMenus(changed, other) {
  const selectedValue = changed.value;
  other.innerHTML = ""; // Clean options from other menu

  originalOptions.forEach((op) => {
    if (op.value !== selectedValue) {
      const option = document.createElement("option");
      option.value = op.value;
      option.textContent = op.text;
      other.appendChild(option);
    }
  });

  // If the last selection of the other menu was deleted, select the first available
  if (![...other.options].some((opt) => opt.value === other.value)) {
    other.selectedIndex = 0;
  }
}

menu1.addEventListener("change", () => updateMenus(menu1, menu2));
menu2.addEventListener("change", () => updateMenus(menu2, menu1));

// Calling the function once charge

updateMenus(menu1, menu2);
updateMenus(menu2, menu1);

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

let exchangeRateValue = 123;

exchangeRate.textContent = `Exchange rate: ${exchangeRateValue}`;

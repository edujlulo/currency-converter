// const buttonCurrency1 = document.getElementById("button-currency1");
// const buttonCurrency2 = document.getElementById("button-currency2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

// buttonCurrency1.addEventListener("click", function () {
//   input1.value = parseFloat((input2.value * 0.8664760419374404).toFixed(2));
// });

// buttonCurrency2.addEventListener("click", function () {
//   input2.value = parseFloat((input1.value * 1.1541).toFixed(2));
// });

const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");

const originalOptions = [
  { value: "pound-sterling", text: "Pound Sterling" },
  { value: "us-dollar", text: "US Dollar" },
  { value: "euro", text: "Euro" },
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

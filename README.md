# 💱 Real-Time Currency Converter

A real-time currency converter built with **Vanilla JavaScript**, allowing users to convert between multiple currencies using up-to-date exchange rates from a public API.

This project focuses on **clean JavaScript logic**, **DOM manipulation**, **API consumption**, and **user experience**, without relying on external frameworks.

---

## 🚀 Live Features

- Real-time currency conversion using live exchange rates
- Support for multiple currencies (USD, EUR, GBP, JPY, and more)
- Dynamic exchange rate calculation
- Two-way input conversion (edit either input)
- Currency inversion with a single click
- Automatic prevention of duplicate currency selection
- Exchange rate update timestamp
- Decimal precision handling (2 decimals)
- Clean and responsive UI
- Built with **HTML, CSS, and Vanilla JavaScript**

---

## 🧠 What This Project Demonstrates

This project was designed to demonstrate:

- Strong understanding of **JavaScript fundamentals**
- DOM manipulation without frameworks
- State management in small applications
- Asynchronous data fetching using `fetch()`
- API integration and error handling
- Clean code structure and readable logic
- Attention to UX details
- Real-world problem solving

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Public Exchange Rate API**

Data provided by:  
**open.er-api.com**

---

## 📦 Supported Currencies

- US Dollar (USD)
- Euro (EUR)
- British Pound Sterling (GBP)
- Japanese Yen (JPY)
- Chinese Renminbi (CNY)
- Canadian Dollar (CAD)
- Australian Dollar (AUD)
- Swiss Franc (CHF)
- Singapore Dollar (SGD)
- Omani Rial (OMR)

---

## 🔄 How It Works

1. The application fetches live exchange rate data from a public API.
2. Users select two different currencies.
3. Entering a value in either input automatically updates the other.
4. Exchange rates are recalculated dynamically based on selected currencies.
5. Users can invert the selected currencies using the swap icon.
6. The last update time is displayed using the API timestamp.

---

## 🌐 API Used

**Endpoint:**

```text
https://open.er-api.com/v6/latest/USD
```

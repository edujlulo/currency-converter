💱 Real-Time Currency Converter

A real-time currency converter built with Vanilla JavaScript, allowing users to convert between multiple currencies using up-to-date exchange rates from a public API.

This project focuses on clean JavaScript logic, DOM manipulation, API consumption, and user experience, without relying on external frameworks.

🚀 Live Features

Real-time currency conversion using live exchange rates

Support for multiple currencies (USD, EUR, GBP, JPY, and more)

Dynamic exchange rate calculation

Two-way input conversion (edit either input)

Currency inversion with a single click

Automatic prevention of duplicate currency selection

Exchange rate update timestamp

Decimal precision handling (2 decimals)

Clean and responsive UI

Built with HTML, CSS, and Vanilla JavaScript

🧠 What This Project Demonstrates

This project was designed to demonstrate:

Strong understanding of JavaScript fundamentals

DOM manipulation without frameworks

State management in small applications

Asynchronous data fetching using fetch()

API integration and error handling

Clean code structure and readable logic

Attention to UX details

Real-world problem solving

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Public Exchange Rate API

Data provided by: open.er-api.com

📦 Supported Currencies

US Dollar (USD)

Euro (EUR)

British Pound Sterling (GBP)

Japanese Yen (JPY)

Chinese Renminbi (CNY)

Canadian Dollar (CAD)

Australian Dollar (AUD)

Swiss Franc (CHF)

Singapore Dollar (SGD)

Omani Rial (OMR)

🔄 How It Works

The application fetches live exchange rate data from a public API.

Users select two different currencies.

Entering a value in either input automatically updates the other.

Exchange rates are recalculated dynamically based on selected currencies.

Users can invert the selected currencies using the swap icon.

The last update time is displayed using the API timestamp.

🌐 API Used

Endpoint:

https://open.er-api.com/v6/latest/USD


Why this API?

Free to use

No API key required

Suitable for front-end projects and learning purposes

⚠️ Note: As with any free public API, availability and structure may change over time.
The application is built to be easily adaptable if the API endpoint changes.

📁 Project Structure
currency-converter/
│
├── index.html
├── style.css
├── script.js
├── img/
│   ├── currencies.png
│   └── convert.png
└── README.md

🎯 Key JavaScript Concepts Used

Event listeners

DOM creation and manipulation

Fetch API and Promises

State management using variables

Conditional logic to handle edge cases

Number formatting and rounding

Date parsing and localization

Separation of concerns (logic vs UI)

📱 Responsiveness

The layout is optimized for:

Desktop

Tablet

Mobile devices

Simple, clean, and readable UI focused on usability.

🧪 Error Handling

Handles failed API requests gracefully

Displays fallback messages if data is unavailable

Prevents invalid currency selections

Avoids NaN and precision issues

📌 Future Improvements

Potential enhancements for future iterations:

Loading state while fetching API data

Offline fallback using cached exchange rates

Accessibility improvements (ARIA labels)

Unit tests for conversion logic

Modular JavaScript structure

Optional framework-based version (React)

👨‍💻 Author

Eduardo Lulo
Junior Front-End Developer

GitHub: https://github.com/edujlulo

📄 License

This project is for educational and portfolio purposes.

💬 Final Note

This project was built to reflect real-world front-end development practices, focusing on clarity, logic, and maintainability rather than relying on external libraries.

Feedback and suggestions are always welcome.

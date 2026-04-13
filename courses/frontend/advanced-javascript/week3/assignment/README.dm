# 💱 Currency Converter


A simple web application that converts amounts between different currencies using real-time exchange rates from an external API.



![App Screenshot](assignment\Screenshot.png)
---

## 🚀 Features

- Convert between multiple currencies
- Real-time exchange rates via API
- User-friendly input validation
- Dynamic dropdown population
- Graceful error handling for API failures
- Clean and responsive UI

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)
- Fetch API

---

## ⚙️ How It Works

1. The app fetches exchange rates from:
   https://open.er-api.com/v6/latest/USD

2. Currency codes are extracted and used to populate dropdowns.

3. The user:
   - Enters an amount
   - Selects "from" and "to" currencies
   - Clicks the convert button

4. The app calculates:
convertedAmount = (amount / rate[from]) * rate[to]

5. The result is displayed with 2 decimal precision.

---

## ✅ Input Validation

- Ensures the input is a number
- Ensures the amount is greater than 0
- Displays helpful, user-friendly messages

---

## ⚠️ Error Handling

- Uses `try...catch` for API requests
- Displays a message if exchange rates fail to load
- Prevents app crashes on network/API errors

---

## 🧩 Code Structure

- `populateCurrencyDropdown()`  
Creates and inserts `<option>` elements using `createElement`

- `convertCurrency()`  
Handles validation and performs currency conversion

---

## 💡 Improvements Made

- Replaced `innerHTML` with `createElement` for safer DOM manipulation
- Extracted repeated logic into reusable functions
- Improved validation messages for better UX
- Added API error handling

---

## ▶️ How to Run

1. Clone the repository
2. Open the project folder
3. Run using Live Server or open `index.html` in browser

---

## 📌 Future Improvements

- Auto-convert on input/change (without button)
- Add loading state while fetching data
- Add swap currency button
- Add currency symbols and flags
- Support dark mode

---

## 👩‍💻 Author
**Mila**

Frontend Trainee | Cybersecurity Enthusiast  

🔗 [LinkedIn](https://linkedin.com/in/mila-siamionava/)  
🔗 [GitHub](https://github.com/lucy-semenova)


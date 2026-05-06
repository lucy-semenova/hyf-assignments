//API part

const exchangeDataURL = "https://open.er-api.com/v6/latest/USD";

//DOM elements

const inputAmount = document.getElementById("input-amount");
const fromCurrencySelect = document.getElementById("dropdown-from-currency");
const toCurrencySelect = document.getElementById("dropdown-to-currency");
const convertBtn = document.getElementById("convert-btn");
const outputAmount = document.getElementById("output-amount");

let currencyRates;

// Populate the dropdowns with currency codes
function populateCurrencyDropdown(selectElement, codes) {
  const options = codes.map((code) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;
    return option;
  });

  selectElement.append(...options);
}

try {
  const ratesResponse = await fetch(exchangeDataURL);

  if (!ratesResponse.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  currencyRates = await ratesResponse.json();

  const currencyCodes = Object.keys(currencyRates.rates);
  populateCurrencyDropdown(fromCurrencySelect, currencyCodes);
  populateCurrencyDropdown(toCurrencySelect, currencyCodes);

  fromCurrencySelect.value = "EUR";
  toCurrencySelect.value = "DKK";
} catch (error) {
  console.error(error);
  outputAmount.textContent =
    "Unable to load exchange rates. Please try again later.";
}

// Connect the button
convertBtn.addEventListener("click", convertCurrency);

// Function to convert currency

function convertCurrency() {
  const inputAmountValue = Number(inputAmount.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(inputAmountValue)) {
    outputAmount.textContent = "Enter a number (e.g., 10 or 10.50).";
    return;
  }

  if (inputAmountValue <= 0) {
    outputAmount.textContent = "Amount must be greater than 0.";
    return;
  }
  const convertedAmount =
    (inputAmountValue / currencyRates.rates[fromCurrency]) *
    currencyRates.rates[toCurrency];

  outputAmount.textContent = `${inputAmountValue} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

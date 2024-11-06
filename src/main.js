const convertCurrencies = [
    { name: 'Euro', code: 'EUR', symbol: '€' },
    { name: 'UK Pound Sterling', code: 'GBP', symbol: '£' },
    { name: 'Australian Dollar', code: 'AUD', symbol: 'A$' },
    { name: 'New Zealand Dollar', code: 'NZD', symbol: 'NZ$' },
    { name: 'United States Dollar', code: 'USD', symbol: '$' },
    { name: 'Canadian Dollar', code: 'CAD', symbol: 'C$' },
    { name: 'Swiss Franc', code: 'CHF', symbol: 'CHF' },
    { name: 'Japanese Yen', code: 'JPY', symbol: '¥' }
];


const convertedToCurrencies = [
    { name: 'Euro', code: 'EUR', symbol: '€' },
    { name: 'UK Pound Sterling', code: 'GBP', symbol: '£' },
    { name: 'Australian Dollar', code: 'AUD', symbol: 'A$' },
    { name: 'New Zealand Dollar', code: 'NZD', symbol: 'NZ$' },
    { name: 'United States Dollar', code: 'USD', symbol: '$' },
    { name: 'Canadian Dollar', code: 'CAD', symbol: 'C$' },
    { name: 'Swiss Franc', code: 'CHF', symbol: 'CHF' },
    { name: 'Japanese Yen', code: 'JPY', symbol: '¥' }
];

let showConvertCurrenciesDropdown = false
function displayConvertCurrencies() {

    const parent = document.getElementById('convertedCurrenciesListParent')
    const arrowUp = document.getElementById('convertedCurrencyArrowUp')
    const arrowDown = document.getElementById('convertedCurrencyArrowDown')

    if (!showConvertCurrenciesDropdown) {
        parent.classList.remove('hidden')
        arrowUp.classList.remove('hidden')
        arrowDown.classList.add('hidden')
        showConvertCurrenciesDropdown = true
        const currenciesList = document.getElementById('convertedCurrenciesList');
        currenciesList.innerHTML = ''
        convertCurrencies.forEach(currency => {
            const listItem = document.createElement('li');
            listItem.textContent = '- ' + currency.name + ` (${currency.code})` + ` - ${currency.symbol}`;
            currenciesList.appendChild(listItem);
            listItem.classList.add('font-poppins', 'cursor-pointer', 'mt-5', 'hover:bg-blue-500', `${currency.code}`);
        });
        listenToConvertCurrencyElementClick()
    }
    else {
        parent.classList.add('hidden')
        arrowDown.classList.remove('hidden')
        arrowUp.classList.add('hidden')
        showConvertCurrenciesDropdown = false
    }

}

const currenciesDropdown = document.getElementById('convertedCurrenciesDropdown')
currenciesDropdown.addEventListener('click', () => {
    displayConvertCurrencies()
})

let selectedConvertedCurrency = 'USD'
function listenToConvertCurrencyElementClick() {
    convertCurrencies.forEach(currency => {
        const currencyElements = document.getElementsByClassName(`${currency.code}`)
        if (currencyElements.length > 0) {
            Array.from(currencyElements).forEach(currencyElement => {
                currencyElement.addEventListener('click', () => {
                    const start = currencyElement.innerHTML.indexOf('(');
                    const end = currencyElement.innerHTML.indexOf(')');
                    const selectedCurrency = currencyElement.innerHTML.substring(start + 1, end);
                    const currencyCode = document.getElementById('convertedCurrencyCode')
                    currencyCode.innerHTML = selectedCurrency
                    const symbol = document.getElementById('convertedCurrencySymbol')
                    const innerText = currencyElement.innerHTML.trim();
                    const symbolPosition = innerText.lastIndexOf(" - ");
                    const currencySymbol = innerText.substring(symbolPosition + 3);
                    symbol.innerHTML = currencySymbol
                    selectedConvertedCurrency = selectedCurrency

                    const flagElement = document.getElementById('convertedCurrencyFlag')
                    switch (selectedCurrency) {
                        case 'USD':
                            flagElement.setAttribute("src", "public/flags/united-states.png");
                            break;
                        case 'EUR':
                            flagElement.setAttribute("src", "public/flags/european-union.png");
                            break;
                        case 'GBP':
                            flagElement.setAttribute("src", "public/flags/united-kingdom.png");
                            break;
                        case 'AUD':
                            flagElement.setAttribute("src", "public/flags/australia.png");
                            break;
                        case 'NZD':
                            flagElement.setAttribute("src", "public/flags/new-zeland.png");
                            break;
                        case 'CAD':
                            flagElement.setAttribute("src", "public/flags/canada.png");
                            break;
                        case 'CHF':
                            flagElement.setAttribute("src", "public/flags/swiss.png");
                            break;
                        case 'JPY':
                            flagElement.setAttribute("src", "public/flags/japan.png");
                            break;

                    }
                });
            });
        }

    })
}

const arrowElement = document.getElementById('arrowAnimate')
async function swapCurrencies() {
    arrowElement.classList.add('animate-spin')
    await new Promise(resolve => setTimeout(resolve, 2000))
    arrowElement.classList.remove('animate-spin')

    const holder = selectedConvertedCurrency
    selectedConvertedCurrency = selectedConvertedToCurrency
    selectedConvertedToCurrency = holder

    const convertedFlagElement = document.getElementById('convertedCurrencyFlag')
    const convertedToFlagElement = document.getElementById('convertedToCurrencyFlag')

    const convertedCurrencyCode = document.getElementById('convertedCurrencyCode')
    const convertedToCurrencyCode = document.getElementById('convertedToCurrencyCode')

    const convertedCurrencySymbol = document.getElementById('convertedCurrencySymbol')

    switch (selectedConvertedCurrency) {
        case 'USD':
            convertedFlagElement.setAttribute("src", "public/flags/united-states.png")
            convertedCurrencyCode.innerHTML = 'USD'
            convertedCurrencySymbol.innerHTML = '$'
            break;
        case 'EUR':
            convertedFlagElement.setAttribute("src", "public/flags/european-union.png")
            convertedCurrencyCode.innerHTML = 'EUR'
            convertedCurrencySymbol.innerHTML = '€'
            break;
        case 'GBP':
            convertedFlagElement.setAttribute("src", "public/flags/united-kingdom.png")
            convertedCurrencyCode.innerHTML = 'GBP'
            convertedCurrencySymbol.innerHTML = '£'
            break;
        case 'AUD':
            convertedFlagElement.setAttribute("src", "public/flags/australia.png")
            convertedCurrencyCode.innerHTML = 'AUD'
            convertedCurrencySymbol.innerHTML = 'A$'
            break;
        case 'NZD':
            convertedFlagElement.setAttribute("src", "public/flags/new-zeland.png")
            convertedCurrencyCode.innerHTML = 'NZD'
            convertedCurrencySymbol.innerHTML = 'NZ$'
            break;
        case 'CAD':
            convertedFlagElement.setAttribute("src", "public/flags/canada.png")
            convertedCurrencyCode.innerHTML = 'CAD'
            convertedCurrencySymbol.innerHTML = 'C$'
            break;
        case 'CHF':
            convertedFlagElement.setAttribute("src", "public/flags/swiss.png")
            convertedCurrencyCode.innerHTML = 'CHF'
            convertedCurrencySymbol.innerHTML = 'CHF'
            break;
        case 'JPY':
            convertedFlagElement.setAttribute("src", "public/flags/japan.png")
            convertedCurrencyCode.innerHTML = 'JPY'
            convertedCurrencySymbol.innerHTML = '¥'
            break;

    }



    switch (selectedConvertedToCurrency) {
        case 'USD':
            convertedToFlagElement.setAttribute("src", "public/flags/united-states.png")
            convertedToCurrencyCode.innerHTML = 'USD'
            break;
        case 'EUR':
            convertedToFlagElement.setAttribute("src", "public/flags/european-union.png")
            convertedToCurrencyCode.innerHTML = 'EUR'
            break;
        case 'GBP':
            convertedToFlagElement.setAttribute("src", "public/flags/united-kingdom.png")
            convertedToCurrencyCode.innerHTML = 'GBP'
            break;
        case 'AUD':
            convertedToFlagElement.setAttribute("src", "public/flags/australia.png")
            convertedToCurrencyCode.innerHTML = 'AUD'
            break;
        case 'NZD':
            convertedToFlagElement.setAttribute("src", "public/flags/new-zeland.png")
            convertedToCurrencyCode.innerHTML = 'NZD'
            break;
        case 'CAD':
            convertedToFlagElement.setAttribute("src", "public/flags/canada.png")
            convertedToCurrencyCode.innerHTML = 'CAD'
            break;
        case 'CHF':
            convertedToFlagElement.setAttribute("src", "public/flags/swiss.png")
            convertedToCurrencyCode.innerHTML = 'CHF'
            break;
        case 'JPY':
            convertedToFlagElement.setAttribute("src", "public/flags/japan.png")
            convertedToCurrencyCode.innerHTML = 'JPY'
            break;

    }

}

const arrowAnimateParent = document.getElementById('arrowAnimateParent')

arrowAnimateParent.addEventListener('click', () => {
    swapCurrencies()
})




let showConvertedToCurrenciesDropdown = false
function displayConvertedToCurrencies() {

    const parent = document.getElementById('convertedToCurrenciesListParent')
    const arrowUp = document.getElementById('convertedToCurrencyArrowUp')
    const arrowDown = document.getElementById('convertedToCurrencyArrowDown')

    if (!showConvertedToCurrenciesDropdown) {
        parent.classList.remove('hidden')
        arrowUp.classList.remove('hidden')
        arrowDown.classList.add('hidden')
        showConvertedToCurrenciesDropdown = true
        const currenciesList = document.getElementById('convertedToCurrenciesList');
        currenciesList.innerHTML = ''
        convertCurrencies.forEach(currency => {
            const listItem = document.createElement('li');
            listItem.textContent = '- ' + currency.name + ` (${currency.code})` + ` - ${currency.symbol}`;
            currenciesList.appendChild(listItem);
            listItem.classList.add('font-poppins', 'cursor-pointer', 'mt-5', 'hover:bg-blue-500', `${currency.code}`);
        });
        listenToConvertedToCurrencyElementClick()
    }
    else {
        parent.classList.add('hidden')
        arrowDown.classList.remove('hidden')
        arrowUp.classList.add('hidden')
        showConvertedToCurrenciesDropdown = false
    }

}

const convertedTocurrenciesDropdown = document.getElementById('convertedToCurrenciesDropdown')
convertedTocurrenciesDropdown.addEventListener('click', () => {
    displayConvertedToCurrencies()
})

let selectedConvertedToCurrency = 'EUR'
function listenToConvertedToCurrencyElementClick() {
    convertedToCurrencies.forEach(currency => {
        const currencyElements = document.getElementsByClassName(`${currency.code}`)
        if (currencyElements.length > 0) {
            Array.from(currencyElements).forEach(currencyElement => {
                currencyElement.addEventListener('click', () => {
                    const start = currencyElement.innerHTML.indexOf('(');
                    const end = currencyElement.innerHTML.indexOf(')');
                    const selectedCurrency = currencyElement.innerHTML.substring(start + 1, end);
                    const currencyCode = document.getElementById('convertedToCurrencyCode')
                    currencyCode.innerHTML = selectedCurrency
                    selectedConvertedToCurrency = selectedCurrency

                    const flagElement = document.getElementById('convertedToCurrencyFlag')
                    switch (selectedCurrency) {
                        case 'USD':
                            flagElement.setAttribute("src", "public/flags/united-states.png");
                            break;
                        case 'EUR':
                            flagElement.setAttribute("src", "public/flags/european-union.png");
                            break;
                        case 'GBP':
                            flagElement.setAttribute("src", "public/flags/united-kingdom.png");
                            break;
                        case 'AUD':
                            flagElement.setAttribute("src", "public/flags/australia.png");
                            break;
                        case 'NZD':
                            flagElement.setAttribute("src", "public/flags/new-zeland.png");
                            break;
                        case 'CAD':
                            flagElement.setAttribute("src", "public/flags/canada.png");
                            break;
                        case 'CHF':
                            flagElement.setAttribute("src", "public/flags/swiss.png");
                            break;
                        case 'JPY':
                            flagElement.setAttribute("src", "public/flags/japan.png");
                            break;
                    }
                });
            });
        }

    })
}

const convertButton = document.getElementById('convertButton')
const inputAmount = document.getElementById('inputAmount')
let amount = inputAmount.value

inputAmount.addEventListener('input', (event) => {
    amount = event.target.value
})


convertButton.addEventListener('click', async () => {
    convertButton.innerHTML = `
        <div class="w-8 h-8 border-4 animate-spin-slow border-dashed rounded-full dark:border-violet-600"></div>
    `
    await new Promise(resolve => setTimeout(resolve, 2000))
    convertButton.innerHTML = 'Convert'

    convert()
})


const apiKey = 'a13d8e419c6552466a4cf4f5'
function convert() {
    const title = document.getElementById('convertedTitle')
    const result = document.getElementById('result')

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${selectedConvertedCurrency}/${selectedConvertedToCurrency}/${amount}`)
        .then(response => response.json())
        .then(data => {
            const dataResult = data;

            title.classList.remove('hidden');

            convertedToCurrencies.forEach((currency) => {
                if (currency.code === selectedConvertedToCurrency) {
                    result.innerHTML = `${currency.symbol} ${dataResult.conversion_result}`;
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}


let showCurrencyRateDropdown = false
const currencyRateDropdownParent = document.getElementById('currencyRatesDropdown')
currencyRateDropdownParent.addEventListener('click', () => {
    const parent = document.getElementById('currencyRatesListParent')
    const arrowUp = document.getElementById('currencyRatesArrowUp')
    const arrowDown = document.getElementById('currencyRatesArrowDown')

    if (!showCurrencyRateDropdown) {
        parent.classList.remove('hidden')
        arrowUp.classList.remove('hidden')
        arrowDown.classList.add('hidden')
        showCurrencyRateDropdown = true
        const currenciesList = document.getElementById('currencyRateList');
        currenciesList.innerHTML = ''
        convertedToCurrencies.forEach(currency => {
            const listItem = document.createElement('li');
            listItem.textContent = '- ' + currency.name + ` (${currency.code})` + ` - ${currency.symbol}`;
            currenciesList.appendChild(listItem);
            listItem.classList.add('font-poppins', 'cursor-pointer', 'mt-5', 'hover:bg-blue-500', `${currency.code}-currencyRates`);
        });
        listenToConvertCurrencyElementInCurrencyRatesClick()
    }
    else {
        parent.classList.add('hidden')
        arrowDown.classList.remove('hidden')
        arrowUp.classList.add('hidden')
        showCurrencyRateDropdown = false
    }

})

let selectedCurrencyRates = 'USD'
function listenToConvertCurrencyElementInCurrencyRatesClick() {

    convertedToCurrencies.forEach(currency => {
        const currencyElements = document.getElementsByClassName(`${currency.code}-currencyRates`)
        if (currencyElements.length > 0) {
            Array.from(currencyElements).forEach(currencyElement => {
                currencyElement.addEventListener('click', () => {
                    const start = currencyElement.innerHTML.indexOf('(');
                    const end = currencyElement.innerHTML.indexOf(')');
                    const selectedCurrency = currencyElement.innerHTML.substring(start + 1, end);
                    const currencyCode = document.getElementById('currencyRatesCode')
                    currencyCode.innerHTML = selectedCurrency
                    selectedCurrencyRates = selectedCurrency
                    const flagElement = document.getElementById('currencyRatesFlag')


                    switch (selectedCurrency) {
                        case 'USD':
                            flagElement.setAttribute("src", "public/flags/united-states.png");
                            break;
                        case 'EUR':
                            flagElement.setAttribute("src", "public/flags/european-union.png");
                            break;
                        case 'GBP':
                            flagElement.setAttribute("src", "public/flags/united-kingdom.png");
                            break;
                        case 'AUD':
                            flagElement.setAttribute("src", "public/flags/australia.png");
                            break;
                        case 'NZD':
                            flagElement.setAttribute("src", "public/flags/new-zeland.png");
                            break;
                        case 'CAD':
                            flagElement.setAttribute("src", "public/flags/canada.png");
                            break;
                        case 'CHF':
                            flagElement.setAttribute("src", "public/flags/swiss.png");
                            break;
                        case 'JPY':
                            flagElement.setAttribute("src", "public/flags/japan.png");
                            break;
                    }
                });
            });
        }

    })


    convertedToCurrencies.forEach((currency) => {
        const elements = document.getElementsByClassName(`${currency.code}-currencyRates`);
        Array.from(elements).forEach((element) => {
            element.addEventListener('click', changeCurrencyRates);
        });
    });
}


const ulName = document.getElementById('name')
const ulPrice = document.getElementById('price')
const ulRefreshTime = document.getElementById('refresh-time')


let generalCurrencies = []
let selectedCurrencies = []

if (!localStorage.getItem('USD')) {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${selectedCurrencyRates}`)
        .then(response => response.json())
        .then(data => {
            const generalCurrencies = Object.entries(data.conversion_rates);
            localStorage.setItem('USD', JSON.stringify(data.conversion_rates));

            let timeNow = Date.now()
            localStorage.setItem(`${selectedCurrencyRates}_timestamp`, new Date(timeNow).toLocaleString()); // Save timestamp

            convertedToCurrencies.forEach((currency) => {
                generalCurrencies.forEach((generalCurrency) => {
                    if (currency.code === generalCurrency[0]) {
                        selectedCurrencies.push(currency);

                        const listItemName = document.createElement('li');
                        listItemName.textContent = currency.code;
                        listItemName.classList.add('font-thin', 'currencyRate-li-element');
                        ulName.appendChild(listItemName);

                        const listItemPrice = document.createElement('li');
                        listItemPrice.textContent = generalCurrency[1].toFixed(2);
                        listItemPrice.classList.add('font-thin');
                        ulPrice.appendChild(listItemPrice);

                        const listItemRefreshTime = document.createElement('li');
                        listItemRefreshTime.textContent = new Date(data.time_last_update_utc).toLocaleString();
                        listItemRefreshTime.classList.add('font-thin');
                        ulRefreshTime.appendChild(listItemRefreshTime);
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
} else {
    const storedCurrencies = JSON.parse(localStorage.getItem('USD'));

    if (localStorage.getItem(`${selectedCurrencyRates}_timestamp`)) {
        let value = localStorage.getItem(`${selectedCurrencyRates}_timestamp`)

        value = value.trim()
        const start = value.indexOf(',')
        const end = value.indexOf(':')
        value = parseInt(value.slice(start + 1, end))

        const dateNow = Date.now();
        let timeNow = new Date(dateNow).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format to HH:MM
        const timeNowEndIndex = timeNow.indexOf(':')
        timeNow = parseInt(timeNow.slice(0, timeNowEndIndex))

        if (timeNow > value) {
            localStorage.removeItem(`${selectedCurrencyRates}_timestamp`);
            localStorage.removeItem(`${selectedCurrencyRates}`)
        }

    }


    convertedToCurrencies.forEach((currency) => {
        if (storedCurrencies[currency.code]) {
            selectedCurrencies.push(currency);

            const listItemName = document.createElement('li');
            listItemName.textContent = currency.code;
            listItemName.classList.add('font-thin', 'currencyRate-li-element');
            ulName.appendChild(listItemName);

            const listItemPrice = document.createElement('li');
            listItemPrice.textContent = storedCurrencies[currency.code].toFixed(2);
            listItemPrice.classList.add('font-thin');
            ulPrice.appendChild(listItemPrice);

            const listItemRefreshTime = document.createElement('li');
            listItemRefreshTime.textContent = new Date().toLocaleString();
            listItemRefreshTime.classList.add('font-thin');
            ulRefreshTime.appendChild(listItemRefreshTime);
        }
    });
}







function changeCurrencyRates() {

    ulName.innerHTML = 'Name'
    ulPrice.innerHTML = 'Price'
    ulRefreshTime.innerHTML = 'Refresh Time'

    let generalCurrencies = []
    let selectedCurrencies = []
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${selectedCurrencyRates}`)
        .then(response => response.json())
        .then(data => {
            generalCurrencies = Object.entries(data.conversion_rates)
            convertedToCurrencies.forEach((currency) => {
                generalCurrencies.forEach((generalCurrency) => {
                    if (currency.code === generalCurrency[0]) {
                        selectedCurrencies.push(currency)
                        const listItemName = document.createElement('li');
                        listItemName.textContent = currency.code
                        listItemName.classList.add('font-thin')
                        ulName.appendChild(listItemName)

                        const listItemPrice = document.createElement('li');
                        listItemPrice.textContent = generalCurrency[1].toFixed(2);
                        listItemPrice.classList.add('font-thin')
                        ulPrice.appendChild(listItemPrice)

                        const listItemRefreshTime = document.createElement('li');
                        listItemRefreshTime.textContent = new Date(data.time_last_update_utc).toLocaleString();
                        listItemRefreshTime.classList.add('font-thin')
                        ulRefreshTime.appendChild(listItemRefreshTime)
                    }
                })
            })
        })
        .catch(error => console.error('Error fetching data:', error));
}


const timeNow = Date.now()
const readableTime = new Date(timeNow).toLocaleString();



const element = document.querySelector('html');
let isDark = false;
let bgThemeKey = 'bgTheme';
const icon = document.getElementById('icon');

const localStorageThemeMode = localStorage.getItem('bgTheme')
if (localStorageThemeMode == "dark") {
    icon.className = '';
    icon.classList.add('fas', 'fa-sun', 'text-5xl', 'dark:text-yellow-500', 'transition-all', 'duration-300', 'ease-in-out', 'shadow-lg', 'p-2', 'rounded-full', 'hover:scale-110');
    element.classList.toggle('dark')
}
const themeModeToggleButton = document.getElementById('themeModeToggleButton')
themeModeToggleButton.addEventListener('click', () => {
    toggleThemeMode()
})
const toggleThemeMode = () => {

    icon.classList.add('animate-spin');

    if (!isDark && localStorageThemeMode == "light") {
        setTimeout(() => {
            icon.className = '';
            icon.classList.add('fas', 'fa-sun', 'text-5xl', 'text-yellow-500', 'transition-all', 'duration-300', 'ease-in-out', 'shadow-lg', 'p-2', 'rounded-full', 'hover:scale-110');
        }, 500);
    }
    else {
        setTimeout(() => {
            icon.className = '';
            icon.classList.add('fas', 'fa-moon', 'text-5xl', 'text-blue-200', 'text-gray-900', 'transition-all', 'duration-300', 'ease-in-out', 'shadow-lg', 'p-2', 'rounded-full', 'hover:scale-110');
        }, 500);
    }

    isDark = !isDark;

    element.classList.toggle('dark');

    if (localStorage.getItem(bgThemeKey)) {
        if (localStorage.getItem(bgThemeKey) === 'dark') {
            localStorage.setItem(bgThemeKey, 'light');
        } else {
            localStorage.setItem(bgThemeKey, 'dark');
        }
    } else {
        localStorage.setItem(bgThemeKey, 'dark');
    }
};







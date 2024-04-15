const inputFromCurrency = document.getElementById('convert-from');
const inputToCurrency = document.getElementById('convert-to');

const inputAmountElement = document.getElementById('convert-count');

const button = document.querySelector('.btn');

const output = document.getElementById('output');

button.addEventListener('click', (event) => {
    event.preventDefault();

    let fromCurrency = inputFromCurrency.value;
    let toCurrency = inputToCurrency.value;
    let inputAmount = inputAmountElement.value;

    fetch(`https://api.coinbase.com/v2/prices/${fromCurrency}-${toCurrency}/spot/`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);

            let rate = data.data.amount;
            let total = rate * inputAmount;
            output.value = `${inputAmount} ${fromCurrency} = ${total} ${toCurrency}`;
        })
        .catch(err => {
            console.error('Fehler:', err);
            output.value = 'Something went wrong. Please try again.'
        })
});

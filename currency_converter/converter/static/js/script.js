const base_curr = document.getElementById("base-currency");
const exchange_curr = document.getElementById("exchange-currency");
const base_amount = document.getElementById("base-amount");
const converted_amount = document.getElementById("converted-amount");
const prev_converted_amount = document.getElementById("prev-converted-amount");
const swap = document.getElementById("swap");
const theRate = document.getElementById("rate");
const prevRate = document.getElementById("prev-rate");

function calculate_rate() {
    const base_currency = base_curr.value;
    const exchange_currency = exchange_curr.value;
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const dd = yesterday.getDate();
    const mm = yesterday.getMonth() + 1;
    const yyyy = yesterday.getFullYear();

    // Fetch current exchange rate
    fetch(`https://api.exchangerate.host/latest?base=${base_currency}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.success){
                const rate = data.rates[exchange_currency];
                theRate.innerText = `Today: 1 ${base_currency} = ${rate} ${exchange_currency}`;
                converted_amount.value = (base_amount.value * rate).toFixed(2);
            }
        });

    // Fetch yesterday's exchange rate
    fetch(`https://api.exchangerate.host/${yyyy}-${mm}-${dd}?base=${base_currency}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.success == 'true'){
                const prev_rate = data.rates[exchange_currency];
                prevRate.innerText = `Yesterday: 1 ${base_currency} = ${prev_rate} ${exchange_currency}`;
                prev_converted_amount.value = (base_amount.value * prev_rate).toFixed(2);
            }
            else {
                prevRate.innerText = `Yesterday's rate is not yet available in historical API`;
            }
        });
}

base_curr.addEventListener("change", calculate_rate);
base_amount.addEventListener("input", calculate_rate);
exchange_curr.addEventListener("change", calculate_rate);
converted_amount.addEventListener("input", calculate_rate);
swap.addEventListener("click", () => {
    const flash = base_curr.value;
    base_curr.value = exchange_curr.value;
    exchange_curr.value = flash;
    calculate_rate();
});

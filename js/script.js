const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput = function () {
    let inputTemperatureUnitValue = inputTemperatureUnit.value;
    let resultTemperatureUnitValue = resultTemperatureUnit.value;

    // Dari Celcius Ke Satuan Lainnya
    let CelciusToFahrenheit = inputTemperatureUnitValue === "Celcius" && resultTemperatureUnitValue === "Fahrenheit";

    // Dari Fahrenheit Ke Satuan Lainnya
    let FahrenheitToCelcius = inputTemperatureUnitValue === "Fahrenheit" && resultTemperatureUnitValue === "Celcius";

    // Dari Satuan yang Sama Ke Satuan yang Sama
    let sameUnits = inputTemperatureUnitValue === resultTemperatureUnitValue;

    // Perhitungan...
    let inputTemperatureValue = temperature.value;
    let convertTemperature = 0;

    if (CelciusToFahrenheit) {
        convertTemperature = (9 / 5 * inputTemperatureValue) + 32;
        result.value = convertTemperature.toFixed(2);
    }
    else if (FahrenheitToCelcius) {
        convertTemperature = 5 / 9 * (inputTemperatureValue - 32);
        result.value = convertTemperature.toFixed(2);
    }
    else if (sameUnits) {
        result.value = inputTemperatureValue;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convert-btn');
    const clearBtn = document.getElementById('clear-btn');
    const inputTemp = document.querySelector('.temperature input[type="text"]');
    const resultTemp = document.querySelector('.result input[type="text"]');
    const formulaDisplay = document.getElementById('formula');

    clearBtn.addEventListener('click', function() {
        inputTemp.value = ''; // Membersihkan input
        resultTemp.value = ''; // Membersihkan output
    });

    convertBtn.addEventListener('click', function() {
        const inputValue = parseFloat(inputTemp.value);
        if (isNaN(inputValue)) {
            alert('Masukkan nilai yang valid');
            return;
        }

        let result;
        let formula;
        if (inputSelect.value === 'Celcius' && resultSelect.value === 'Fahrenheit') {
            result = (inputValue * 9/5) + 32;
            formula = `Formula: (${inputValue} °C * 9/5) + 32 = ${result.toFixed(2)} °F`;
        } else if (inputSelect.value === 'Fahrenheit' && resultSelect.value === 'Celcius') {
            result = (inputValue - 32) * 5/9;
            formula = `Formula: (${inputValue} °F - 32) * 5/9 = ${result.toFixed(2)} °C`;
        } else {
            result = inputValue; // Jika tidak ada konversi yang diperlukan
            formula = 'Tidak ada konversi yang dilakukan.';
        }

        resultTemp.value = result.toFixed(2);
        formulaDisplay.textContent = formula;
    });
});
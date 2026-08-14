// Specific ID selectors to avoid bugs
const numberInput = document.querySelector("#number");
const startInput = document.querySelector("#start");
const endInput = document.querySelector("#end");
const resultP = document.querySelector("#result");

function show(event) {
    event.preventDefault();

    let number = Number(numberInput.value);
    let start = Number(startInput.value);
    let end = Number(endInput.value);

    // Validation logic
    if (start > end) {
        resultP.style.display = "block";
        resultP.innerHTML = "Start number end se chota ya barabar hona chahiye!";
        return;
    }

    resultP.style.display = "block";
    resultP.innerHTML = "";

    for (let i = start; i <= end; i++) {
        resultP.innerHTML += `${number} &times; ${i} = ${number * i} <br>`;
    }
}
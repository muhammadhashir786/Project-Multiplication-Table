let numberInput = document.querySelector("#number")
let startInput = document.querySelector("#start")
let endInput = document.querySelector("#end")
let resultP = document.querySelector("#result")

resultP.style.display = "none"

function show(event) {
    event.preventDefault()

    // console.log(input.value);

    let number = Number(numberInput.value)
    let start = Number(startInput.value)
    let end = Number(endInput.value)


    // Validation logic
    if (start > end) {
        resultP.style.display = "block";
        resultP.innerHTML = "Start number end se chota ya barabar hona chahiye!";
        return;
    }

    resultP.style.display = "block"
    resultP.innerHTML = ""

    for (let i = start; i <= end; i++) {
        resultP.innerHTML += `${number} x ${i} = ${number * i} <br>`
    }

}
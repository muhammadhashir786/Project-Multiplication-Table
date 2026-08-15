let inputNumber = document.querySelector("#number")
let inputStart = document.querySelector("#start")
let inputEnd = document.querySelector("#end")
let result = document.querySelector("#result")

function table(event) {
    event.preventDefault()

    const number = Number(inputNumber.value)
    const start = Number(inputStart.value)
    const end = Number(inputEnd.value)

    if (start > end) {
        result.style.display = "block"
        result.innerHTML = "Start number must be less than or equal to end number"
        return;
    }

    result.style.display = "block"
    result.innerHTML = ""

    for (let i = start; i <= end; i++) {
        result.innerHTML += `${number} x ${i} = ${number * i} <br>`
    }

}
// create a function that runs when form will submit

function printTable(event) {
    event.preventDefault()  // to prevent form from refresh

    // select user-input, starting-value, ending-value and p element from HTML

    const input = document.querySelector("#user-input")
    const start = document.querySelector("#starting-value")
    const end = document.querySelector("#ending-value")
    const p = document.querySelector("#table-content")

    const tableOf = Number(input.value) // store user input and convert it into number
    const startingValue = Number(start.value)   // store starting value 
    const endingValue = Number(end.value)   // store ending value

    p.innerHTML = ""    // used so that new value input dene p previous data remove hojaye

    for (let i = startingValue; i <= endingValue; i++) {
        p.innerHTML += `${tableOf} x ${i} = ${tableOf * i} <br>`
    }
}

let input = document.querySelector("input")
let p = document.querySelector("p")
let s = document.querySelector("#start")
let e = document.querySelector("#end")

p.style.display = "none"

function show(event) {
    event.preventDefault()

    // console.log(input.value);

    let number = Number(input.value)
    let start = Number(s.value)
    let end = Number(e.value)

    p.style.display = "block"
    p.innerHTML = ""

    for (let i = start; i <= end; i++) {
        p.innerHTML += `${number} x ${i} = ${number * i} <br>`
    }


}
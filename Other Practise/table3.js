let numberInput = document.querySelector("#number");
let startInput = document.querySelector("#start");
let endInput = document.querySelector("#end");
let p = document.querySelector("p");

// Start me output box ko hide rakha hai
p.style.display = "none";

function show(event) {
    event.preventDefault();

    let number = Number(numberInput.value);
    let start = Number(startInput.value);
    let end = Number(endInput.value);

    // Validation Check: Agar inputs khali hon
    if (!numberInput.value || !startInput.value || !endInput.value) {
        p.style.display = "block";
        p.innerHTML = "Please fill all fields!";
        return;
    }

    // Validation Check: Agar start value end se bari ho
    if (start > end) {
        p.style.display = "block";
        p.innerHTML = "'Where to start' should be less than or equal to 'where to end'!";
        return;
    }

    // Table show karein aur scroll ko top par reset karein
    p.style.display = "block";
    p.scrollTop = 0;
    p.innerHTML = "";

    // Table Loop
    for (let i = start; i <= end; i++) {
        p.innerHTML += `${number} x ${i} = ${number * i}<br>`;
    }
}
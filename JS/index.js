const counter = document.querySelector("#counter-number");
const submitBtn = document.querySelector("button");

submitBtn.classList.add("disabled");

document.querySelector("input[type=text]").addEventListener("input", (e) => {
    const inputValue = document.querySelector("input[type=text]").value.trim();

    if (inputValue) {
        submitBtn.classList.remove("disabled");
    } else {
        submitBtn.classList.add("disabled");
    }
});

document.querySelector("button").addEventListener("click", () => {
    counter.classList.add("push");
    const inputInNum = parseFloat(
        document.querySelector("input[type=text]").value
    );
    if (isNaN(inputInNum)) {
        alert("That is not a number!");
        document.querySelector("input[type=text]").value = "";
    } else if (inputInNum < 10 || inputInNum > 200) {
        alert(`You can only input numbers between 10 and 200!`);
        document.querySelector("input[type=text]").value = "";
    } else {
        let i = 0;
        let a = setInterval(() => {
            i++;
            counter.textContent = i;
            if (i === inputInNum) {
                clearInterval(a);
                setTimeout(() => {
                    counter.textContent = ``;
                    document.querySelector("input[type=text]").value = "";
                }, 400);
            }
        }, 300);
    }
});

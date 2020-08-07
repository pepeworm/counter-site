const counter = document.querySelector("#counter-number");
const submitBtn = document.querySelector("button");

submitBtn.classList.add("disabled");

document.querySelector(".error-msg").classList.remove("push");
document.querySelector(".error-msg").value = "";

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
        document.querySelector(".error-msg").value = "You can only input numbers between 10 and 200!";
        setTimeout(() => {
            document.querySelector("input[type=text]").value = "";
        }, 800)
    } else if (inputInNum < 10 || inputInNum > 200) {
        document.querySelector(".error-msg").value = "You can only input numbers between 10 and 200!";
        setTimeout(() => {
            document.querySelector("input[type=text]").value = "";
        }, 800)
    } else {
        const toInt = Math.floor(inputInNum);
        let i = 0;
        let a = setInterval(() => {
            i++;
            counter.textContent = i;
            if (i === toInt) {
                clearInterval(a);
                setTimeout(() => {
                    counter.textContent = ``;
                    document.querySelector("input[type=text]").value = "";
                }, 400);
            }
        }, 300);
    }
});

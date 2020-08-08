const counter = document.querySelector("#counter-number");
const submitBtn = document.querySelector("button");

const alertMsg = document.querySelector(".alert-push");

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
        alertMsg.textContent = `That is not a number!`;
        setTimeout(() => {
            alertMsg.textContent = ``;
        }, 1000)
        document.querySelector("input[type=text]").value = "";
    } else if (inputInNum < 10 || inputInNum > 200) {
        alertMsg.textContent = `You can only input numbers between 10 and 200!`;
        setTimeout(() => {
            alertMsg.textContent = ``;  
        }, 1500);
        document.querySelector("input[type=text]").value = "";
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

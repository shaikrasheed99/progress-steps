const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const progessLine = document.querySelector(".progress-line");
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;

nextButton.addEventListener("click", () => {
    currentIndex += 1;
    if (currentIndex > circles.length) {
        currentIndex = circles.length;
    }
    updateUi();
});

prevButton.addEventListener("click", () => {
    currentIndex -= 1;
    if (currentIndex < 1) {
        currentIndex = 1;
    }
    updateUi();
});

const updateUi = () => {
    activateCircle();
    const percentage = ((currentIndex - 1) / (circles.length - 1)) * 100 + "%";
    progessLine.style.width = percentage;
};

const activateCircle = () => {
    circles.forEach((circle, index) => {
        if (index < currentIndex) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    if (currentIndex === 1) {
        prevButton.disabled = true;
    } else if (currentIndex == circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
};
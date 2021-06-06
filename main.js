const overlayClick = document.getElementById("overlay");
const container = document.querySelector(".container");
const modal = document.querySelector(".modal");

const mouseEvent = document.querySelector(".mouse_event_modal");
const keyboardEvent = document.querySelector(".keyboard_event_modal");
const kb = document.getElementById("kb");
const mo = document.getElementById("mo");

const display = document.querySelector(".display");

const inp = document.getElementById("inp");
const keyboard_display = document.querySelector(".console");

container.addEventListener("click", (e) => {
    e.target.classList.add("active");
    if (e.target.id === "mo") {
        mouseEvent.classList.remove("hidden");
        overlayClick.classList.add("active");
        modal.classList.add("active");
    }
    if (e.target.id === "kb") {
        keyboardEvent.classList.remove("hidden");
        overlayClick.classList.add("active");
        modal.classList.add("active");
        inp.focus();
    }
});

// Mouse events

const touchArea = document.getElementById("touchArea");

touchArea.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

touchArea.addEventListener("dblclick", (e) => {
    alert("Double clicks are not allowed");
});

function clearDisplay() {
    setTimeout(() => {
        display.innerText = " ";
    }, 800);
}

touchArea.addEventListener("mouseup", (e) => {
    if (e.button == 0) {
        display.innerText = "LEFT CLICK";
        clearDisplay();
    }
    if (e.button == 2) {
        display.innerText = "RIGHT CLICK";
        clearDisplay();
    }
});

touchArea.addEventListener("mouseover", (e) => {
    display.innerText = "Hi, click any button";
});
touchArea.addEventListener("mouseout", (e) => {
    display.innerText = "Bye !";
    clearDisplay();
});

// End of mouse events

overlayClick.addEventListener("click", (e) => {
    e.target.classList.remove("active");
    kb.classList.remove("active");
    mo.classList.remove("active");
    modal.classList.remove("active");
    mouseEvent.classList.add("hidden");
    keyboardEvent.classList.add("hidden");
});

keyboard_display.addEventListener("click", (e) => {
    inp.focus();
});

inp.addEventListener("keydown", (e) => {
    keyboard_display.innerText = e.code;
    inp.value = " ";
});

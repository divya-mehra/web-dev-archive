let markupToggle = document.querySelector("#markup-toggle");
let markupElements = document.querySelectorAll(".markup")

let toggleMarkup = () => {
    if(markupToggle.classList.contains("show")) {
        markupToggle.classList.toggle("show");
        markupToggle.textContent = "Show Markup"
        markupElements.forEach((el) => {el.style.display = "none"})
    } else {
        markupToggle.classList.toggle("show");
        markupElements.forEach((el) => {el.style.display = "inline-block"})
        markupToggle.textContent = "Hide Markup"
    }
}

markupToggle.addEventListener("click", toggleMarkup)


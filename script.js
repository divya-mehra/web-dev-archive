let markupToggle = document.querySelector("#markup-toggle");
let markupElements = document.querySelectorAll(".markup");

let toggleMarkup = () => {
  if (markupToggle.classList.contains("show")) {
    markupToggle.classList.toggle("show");
    markupToggle.textContent = "Show Markup";
    markupElements.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    markupToggle.classList.toggle("show");
    markupElements.forEach((el) => {
      el.style.display = "inline-block";
    });
    markupToggle.textContent = "Hide Markup";
  }
};

markupToggle.addEventListener("click", toggleMarkup);

// Change sections

let sections = ["agenda", "syllabus"];

let changeSection = (element) => {
  element.target.classList.toggle("selected-link");
  let el = document.querySelector(`#${element.target.id}-content`);
  el.classList.toggle("show");
  document.querySelectorAll(".main-content").forEach((e) => {
    if (e != el) {
      e.classList.remove("show");
    }
  });
  document.querySelectorAll(".nav-link").forEach((e) => {
    if (e != element.target) {
      e.classList.remove("selected-link");
    }
  });
};

document.querySelector("#agenda").addEventListener("click", (e) => {
  changeSection(e);
});
document.querySelector("#syllabus").addEventListener("click", (e) => {
  changeSection(e);
});

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
let navLinkNames = ["syllabus", "agenda", "people", "resources", "projects", "exercises"]
let navLinks = document.querySelectorAll(".nav-link");
let mainContent = document.querySelectorAll(".main-content");


let changeSection = (element) => {
  element.target.classList.toggle("selected-link");
  let el = document.querySelector(`#${element.target.id}-content`);
  el.classList.toggle("show");
  mainContent.forEach((e) => {
    if (e != el) {
      e.classList.remove("show");
    }
  });
  navLinks.forEach((e) => {
    if (e != element.target) {
      e.classList.remove("selected-link");
    }
  });
  updateToggle();

  noneSelected
    ? toggles.classList.add("hide-toggle")
    : toggles.classList.remove("hide-toggle");
};

navLinkNames.forEach((name) => {
    document.querySelector(`#${name}`).addEventListener("click", (e) => {
        changeSection(e);
      });
})

// Show/Hide Toggles

let toggles = document.querySelector(".toggles");
let noneSelected = true;

let updateToggle = () => {
  noneSelected = true; // Reset the flag before each check
  navLinks.forEach((e) => {
    if (e.classList.contains("selected-link")) {
      noneSelected = false;
    }
    console.log(noneSelected);
  });

  return noneSelected;
};

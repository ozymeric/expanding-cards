// This is my solution:::::
// ---------------------------------------------------------------------------------

let panels = document.querySelectorAll(".panel");

function activate() {
  for (let panel of panels) {
    panel.classList.remove("active");
  }
  this.classList.add("active");
}

for (let panel of panels) {
  panel.addEventListener("click", activate);
}

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// UDEMY SOLUTION:
// ---------------------------------------------------------------------------------

// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

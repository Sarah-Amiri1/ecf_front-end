// const btnBurger = document.querySelector("#burger-icon");
// const nav2 = document.querySelector(".nav2");

// btnBurger.addEventListener("click", () => {
//     nav2.classList.toggle("active");
//     btnBurger.classList.toggle("open");
// });

// document.addEventListener("click", (e) => {
//     if (!btnBurger.contains(e.target) && !nav2.contains(e.target)) {
//         nav2.classList.remove("active");
//         btnBurger.classList.remove("open");
//     }
// });

const btnBurger = document.querySelector("#burger-icon");
const btnClose = document.querySelector("#burger-close");
const nav2 = document.querySelector(".nav2");

// Ouvrir le menu
btnBurger.addEventListener("click", () => {
    nav2.classList.add("active");
    btnBurger.style.display = "none";
    btnClose.style.display = "block";
});

// Fermer le menu
btnClose.addEventListener("click", () => {
    nav2.classList.remove("active");
    btnBurger.style.display = "block";
    btnClose.style.display = "none";
});

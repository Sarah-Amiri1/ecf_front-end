const btnBurger = document.querySelector("#burger-icon");
const btnClose = document.querySelector("#burger-close");
const nav2 = document.querySelector(".nav2");

btnBurger.addEventListener("click", () => {
    nav2.classList.add("active");
    btnBurger.style.display = "none";
    btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
    nav2.classList.remove("active");
    btnBurger.style.display = "block";
    btnClose.style.display = "none";
});

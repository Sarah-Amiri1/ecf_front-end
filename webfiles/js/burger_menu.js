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
const nav2 = document.querySelector(".nav2");

if (btnBurger && nav2) {
    btnBurger.addEventListener("click", () => {
        nav2.classList.toggle("active");
        btnBurger.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
        if (!btnBurger.contains(e.target) && !nav2.contains(e.target)) {
            nav2.classList.remove("active");
            btnBurger.classList.remove("open");
        }
    });
} else {
    console.error("Erreur : Élément .nav2 non trouvé !");
}

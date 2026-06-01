const btnSwitch = document.getElementById("btnSwitch");
const navbar = document.getElementById("mainNavbar");
const botonIrArriba = document.getElementById('btn-arriba');

btnSwitch.addEventListener("click", () => {

    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {

        html.setAttribute("data-bs-theme", "light");

        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("bg-light", "navbar-light");


        botonIrArriba.classList.remove("btn-dark");
        botonIrArriba.classList.add("btn-light");

    } else {

        html.setAttribute("data-bs-theme", "dark");

        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-body-tertiary");

        botonIrArriba.classList.remove("btn-light");
        botonIrArriba.classList.add("btn-dark");

    }
});


// Escuchamos cuando el usuario hace clic en él
botonIrArriba.addEventListener('click', () => {
 // Nos desplaza al inicio de la página (coordenadas 0,0) de forma suave
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

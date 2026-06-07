const btnSwitch = document.getElementById("btnSwitch");
const navbar = document.getElementById("mainNavbar");
const botonIrArriba = document.getElementById('btn-arriba');
const botonRegalo = document.getElementById('btn-regalo');
const btnImagen = document.getElementById('btn-attr');
const miImagen =document.getElementById('mi-imagen');
const miImagen2 =document.getElementById('mi-imagen2');

btnSwitch.addEventListener("click", () => {

    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {

        html.setAttribute("data-bs-theme", "light");

        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("bg-light", "navbar-light");


        botonIrArriba.classList.remove("btn-dark");
        botonIrArriba.classList.add("btn-light");

        botonRegalo.classList.remove("btn-dark");
        botonRegalo.classList.add("btn-light");

    } else {

        html.setAttribute("data-bs-theme", "dark");

        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-body-tertiary");

        botonIrArriba.classList.remove("btn-light");
        botonIrArriba.classList.add("btn-dark");

        botonRegalo.classList.remove("btn-light");
        botonRegalo.classList.add("btn-dark");

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


$(document).ready(function () {

    $('#btn-attr').click(function () {

        if ($('#mi-imagen').attr('src') === './Assets/IMG/La_chica_del_Tren.jpg') {

            $('#mi-imagen').attr('src', './Assets/IMG/PXL_20250718_015847405.PORTRAIT-1-scaled.jpg');
            $('#mi-imagen2').attr('src', './Assets/IMG/5757.webp');

            $('#caja-texto').html('<b>Año publicacion 2016 - Editorial Alfaguara</b>');

        } else {

            $('#mi-imagen').attr('src', './Assets/IMG/La_chica_del_Tren.jpg');
            $('#mi-imagen2').attr('src', './Assets/IMG/Paula-Hawkins-Lloren-Osa-Edinburgh-Central-Library1-kOkB-U2201643341416oBD-1248x1248@MujerHoy.jpg');

            $('#caja-texto').html('Texto normal');

        }
    });

});

$(document).ready(function () {

    $('#btn-append').click(function () {

        let titulo = $('#mi-input').val();

        $('#mi-input').before(
            `<li><a class="dropdown-item" href="#">${titulo}</a></li>`
        );

    });

    $('#btn-prepend').click(function () {

        let titulo = $('#mi-input').val();

        $('#mi-lista').prepend(
            `<li><a class="dropdown-item" href="#">${titulo}</a></li>`
        );

    });

});
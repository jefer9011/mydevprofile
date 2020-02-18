$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);

        }
    });
});


const lista = document.getElementById('lista');
const typed = new Typed('.typed', {
    strings: [
        '<i class="profesion"></i>',
        '<i class="profesion">Ingeniero Electrónico</i>',
        '<i class="profesion">Desarrollador Frontend</i>',
        '<i class="profesion">Profesor</i>',
        '<i class="profesion">Técnico profesional en Redes</i>',
        '<i class="profesion">Diseñador Empírico</i>'
    ],
    // Opciones de configuracion libreria typed.js
    stringsElement: '#cadenas-texto',
    typeSpeed: 30,
    startDelay: 300,
    backspeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'

});



Sortable.create(lista, {
    animation: 350,
    chosenClass: "seleccionado",
    ghostClass: "fantasma",
    dragClass: "drag",

    onEnd: () => {
        console.log("Se insertó un elemento");
    },
    group: "lista-personas",
    store: {
        // Guardar orden de la lista
        set: (sortable) => {
            const orden = sortable.toArray();

            localStorage.setItem(sortable.options.group.name, orden.join('|'));
            console.log(orden);
        },
        // Obtener orden de la lista
        get: (sortable) => {
            const orden = localStorage.getItem(sortable.options.group.name);
            return orden ? orden.split('|') : [];
        }

    }
});
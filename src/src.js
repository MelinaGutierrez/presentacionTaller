function mostrarMas(idname) {
    const element = document.querySelector(`#${idname}`);
    if (element.getAttribute("hidden")) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "true");
    }
}
function irArriba (pxPantalla) {
    window.addEventListener ('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById ('botonArriba') ;
        if ( scroll > pxPantalla ) {
            botonArriba.style.right = 30 + "px" ;
        }else {                    
            botonArriba.style.right = -100 + "px" ;
        }
    })
}
irArriba(500);

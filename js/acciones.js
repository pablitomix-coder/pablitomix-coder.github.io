let menuDesplegado = false;
$("#icon").on('click', function() {
    if (menuDesplegado) {
        $("#menu").css("display", "none");
        menuDesplegado = false;
    } else {
        $("#menu").css("display", "flex");
        menuDesplegado = true;
    }
});
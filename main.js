$(document).ready(initializeApp);

function initializeApp() {
    $(window).scroll(navBarClose);
}



function navBarClose() {
    if($(window).width() < 992) {
        if($(".navbar-toggler").attr("aria-expanded") === "true") {
            $(".navbar-collapse").collapse("hide");
        }
    }
}
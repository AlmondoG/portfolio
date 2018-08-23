$(document).ready(initializeApp);

function initializeApp() {
    contactInfoE();
    contactInfoPN();
    $(window).scroll(navBarClose);
}



function navBarClose() {
    if($(window).width() < 992) {
        if($(".navbar-toggler").attr("aria-expanded") === "true") {
            $(".navbar-collapse").collapse("hide");
        }
    }
}

function contactInfoE() {
    var parts = ["AminG3M", "com", "@", ".", "yahoo"];
    var email = parts[0] + parts[2] + parts[4] + parts[3] + parts[1];
    $(".el-emailo").text(email);
}

function contactInfoPN() {
    var parts = ["66", "045", "3", "858", "9"];
    var number = parts[3] + parts[0] + parts[2] + parts[1] + parts[4];
    $(".el-telephono").text(number);
}
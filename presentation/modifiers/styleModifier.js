function changeBackground() {
    $("body")[0].style.backgroundImage = "url('./royce_assets/theme_assets/RoyceBorder.svg'), url('./royce_assets/theme_assets/HenryRoyceInstitute_MasterLogo_RGB_Grey.png')";
};
function checkTitleSlide() {
    var titleSlide = $("#titleSlide");
    var firstContentSlide = $("#firstContentSlide");

    if (titleSlide.hasClass("present")) {
        changeBackground();
    }
    else if (firstContentSlide.hasClass("past") && titleSlide.hasClass("present")){
        changeBackground();
    }
    else {
        $("body")[0].style.backgroundImage = "";
    }
};
$(document).ready(function(){
    checkTitleSlide();
    $(document).keydown(function (event) {
        checkTitleSlide();
    });
});

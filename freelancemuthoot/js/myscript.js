
var pos = 0;
var totalSlides = $('#slider-main-body ul li').length;
var sliderWidth = $('#slider-main-body').width();

jQuery(document).ready(function ($) {
    $("#verify-otp-form").hide();
    $('#slider-main-body ul#slider').width(sliderWidth * totalSlides);
    $('#next').click(function () {
        slideRight();
    });
    $('#previous').click(function () {
        slideLeft();
    });
    var autoSlider = setInterval(slideRight, 500000);
    $.each($('#slider-main-body ul li'), function () {
        var c = $(this).attr("data-color");
        $(this).css("background", c);
        var li = document.createElement('li');
        $('#pagination-wrap ul').append(li);
    });
    countSlides();
    pagination();
    $('#slider-main-body').hover(
        function () { $(this).addClass('active'); clearInterval(autoSlider); },
        function () { $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );


    $(".knowmore").on("click", function () {

        $("#mymodeltest").modal("show");
    });
});


function SendOtp() {
    $("#verify-otp-form").show();

}
function viewHouseInfo() {
    window.open("/Home/About",'_blank')

}


function slideLeft() {
    pos--;
    if (pos == -1) { pos = totalSlides - 1; }
    $('#slider-main-body ul#slider').css('left', -(sliderWidth * pos));
    countSlides();
    pagination();
}
function slideRight() {
    pos++;
    if (pos == totalSlides) { pos = 0; }
    $('#slider-main-body ul#slider').css('left', -(sliderWidth * pos));
    countSlides();
    pagination();
}
function countSlides() {
    $('#counter').html(pos + 1 + ' / ' + totalSlides);
}

function pagination() {
    $('#pagination-wrap ul li').removeClass('active');
    $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
}

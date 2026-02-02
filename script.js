let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


// recommendのフェードイン
$(window).scroll(function () {
    $("li").each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowheight = $(window).height();

        if (scroll = target - windowheight + 200) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)")
        }
    });
});

$(document).ready(function () {
    $('.recommend-img').slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }
        ]
    });
});
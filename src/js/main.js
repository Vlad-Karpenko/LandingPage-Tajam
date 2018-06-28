$(document).ready(function () {
    $('.center').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
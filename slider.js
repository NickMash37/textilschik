jQuery(document).ready(($) => {
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
})
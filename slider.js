$(document).ready(function(){
    $("#slider").owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0:{
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
  });
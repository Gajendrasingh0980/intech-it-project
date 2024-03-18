$('.banner-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }

    }
})

$(window).on('scroll', function (e) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if ($(window).scrollTop() >= ($(".numbers").offset().top - ($(window).height()))) {
        if (!$(".numbers").hasClass("animated")) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(numberWithCommas(Math.ceil(now)));
                    }
                });
            });
            // $("#triggered").addClass("show");
            $(".numbers").addClass("animated");
        }
    }
});

let mybutton = document.getElementById("go-top");
document.getElementById('go-top').style.display = "none";
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

$('#go-top').on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
})

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }

    }
})

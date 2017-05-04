$(function() {

    /* Mobile menu plugin settings */

    $('#my-menu').mmenu({
        extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<span class="yellow">S</span><span class="ampersand yellow">&</span><span class="white">Miller</span>'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');

    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });


    /* Owl Carousel plugin settings */


    $('.carousel-services').on('initialized.owl.carousel', function () {
       setTimeout(function () {
           serviceImgAutoHeight(); // Set timeout for correct work of this function
       }, 100)
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    /* Function for image auto height calculating in Service block */

    function serviceImgAutoHeight() {
        $('.services-block').each(function () {

            var ths = $(this),
                thsHeight = ths.find('.service-content').outerHeight();
                ths.find('.service-img').css('min-height', thsHeight);
        });
    }serviceImgAutoHeight();

    /* Selectize plugin settings */

    $('select').selectize({
        create: true,
    });


    /* AJAX email registration form */

    $("form.reg-form").submit(function () { //Change
        var regForm = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(regForm).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function () {
                regForm.find('success').removeClass('active').fadeOut();
                regForm.trigger("reset");
            }, 2000);
        });
        return false;
    });

    /* Owl Carousel plugin settings for section Testimonials */

    $('.testimonials').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        autoHeight: true
    });

    /* Owl Carousel plugin settings for section Partners */

    $('.partners').owlCarousel({
        loop: true,
        dots: false,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            567: {
                items: 2
            },
            991: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    /* To top button script */

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');    
        }     
    });

    $('.to-top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');        
    });
});



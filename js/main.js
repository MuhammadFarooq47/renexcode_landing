!(function (e) {
    "use strict";
    function t() {
        e(window).scrollTop() >= 80 ? e(".navfix").addClass("sticky") : e(".navfix").removeClass("sticky");
    }
    new WOW().init();
    var a = e("#main-nav"),
        s = e(".toggle"),
        i = {
            disableAt: !1,
            customToggle: s,
            levelSpacing: 10,
            navTitle: "Menu",
            levelTitles: !0,
            levelTitles: !0,
            labelClose: !1,
            levelTitleAsBack: !0,
            levelOpen: "expand",
            closeOnClick: !0,
            insertClose: !0,
            closeActiveLevel: !0,
            insertBack: !0,
        };
    a.hcOffcanvasNav(i);
    e(function () {
        e(window).scroll(t), t();
    });
    var o = e("li.sbmenu");
    o.hover(
        function () {
            e(this).addClass("hover");
        },
        function () {
            e(this).removeClass("hover");
        }
    ),
        e(".video-link").magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160 }),
        e('[data-toggle="tooltip"]').tooltip();
    var l = e(".service-card-prb");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 20,
        nav: !1,
        dots: !1,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 } },
    });
    var l = e(".testimonial-card-a");
    l.owlCarousel({ items: 1, loop: !0, autoplay: !0, autoplayTimeout: 6e3, autoplayHoverPause: !0, smartSpeed: 500, responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 }, 1400: { items: 1 } } });
    var l = e(".video-testimonials");
    l.owlCarousel({ items: 2, nav: !1, dots: !1, autoplay: !1, autoplayTimeout: 3500, smartSpeed: 1500, margin: 20, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 2 }, 1400: { items: 2 } } });
    var l = e(".project-screens");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 20,
        nav: !1,
        dots: !1,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 } },
    });
    var l = e(".porto-slide");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        stagePadding: 50,
        autoplayTimeout: 35e4,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: { 0: { items: 1, stagePadding: 0 }, 520: { items: 1, stagePadding: 0 }, 768: { items: 1, stagePadding: 0 }, 1200: { items: 1 }, 1400: { items: 1 }, 1600: { items: 1 } },
    });
    var l = e(".single-slide");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        stagePadding: 100,
        autoplayTimeout: 3500,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: { 0: { items: 1, stagePadding: 0 }, 520: { items: 1, stagePadding: 0 }, 768: { items: 1, stagePadding: 0 }, 1200: { items: 1 }, 1400: { items: 1 }, 1600: { items: 1 } },
    });
    var l = e(".bages-slider");
    l.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin:0,
        nav: false,
        dots: true,
        mergeFit: true,
        center: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass: true,
        smartSpeed: 2000,
        responsive: { 0: { items: 1 }, 520: { items: 1,loop:!0 }, 768: { items: 1,loop:!0 }, 1200: { items: 1,loop:!0 }, 1400: { items: 1 }, 1600: { items: 1 } },
    });
    var l = e(".logo-weworkfor");
    l.owlCarousel({
        items: 4,
        loop: !0,
        autoplay: !0,
        margin: 10,
        nav: !1,
        dots: !1,
        autoplayTimeout: 3000,
        autoplayHoverPause: !1,
        smartSpeed: 2e3,
        responsive: { 0: { items: 3 }, 520: { items: 3 }, 768: { items: 4 }, 1200: { items: 4 }, 1400: { items: 5 }, 1600: { items: 6 } },
    });
    var l = e(".testimonial-card-b");
    l.owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        dots: !0,
        dotsContainer: "#testimonials-avatar",
        smartSpeed: 500,
        responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 }, 1400: { items: 1 } },
    }),
        e(".counter").counterUp({ delay: 10, time: 2500 }),
        e.scrollUp({ animation: "fade", scrollImg: { active: !0, type: "background" } }),
        e(".card-list").imagesLoaded(function () {
            var t = e(".card-list").isotope({ itemSelector: ".single-card-item", percentPosition: !0, masonry: { columnWidth: ".grid-sizer" } });
            e(".filter-menu").on("click", "li", function () {
                var a = e(this).attr("data-filter");
                t.isotope({ filter: a });
            });
        }),
        e(".filter-menu li").on("click", function (t) {
            e(this).siblings(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked"), t.preventDefault();
        }),
        e("[data-background]").each(function () {
            e(this).css("background-image", "url(" + e(this).attr("data-background") + ")");
        });
         $('.responsive-client').slick({
  dots: false,
  infinite: false,
  speed: 1000,
  infinite: true,
  autoplay: true,
  prevArrow: false,
    nextArrow: false,

  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
})(jQuery);
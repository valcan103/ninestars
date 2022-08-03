$(function () {
    $(".nav_right>ul>:nth-child(6)").on("mouseenter", () => {
        $(".dropdown").stop().fadeIn();
        $(".dropdown>li:nth-child(2)").on("mouseenter", () => {
            $(".dropdown2").stop().fadeIn();
        });
        $(".dropdown>li:nth-child(2)").on("mouseleave", () => {
            $(".dropdown2").stop().fadeOut();
        });
    });
    $(".nav_right>ul>:nth-child(6)").on("mouseleave", () => {
        $(".dropdown").stop().fadeOut();
    });
});

$(function () {
    $(".mobile_menu>i").on("click", () => {
        $(".nav_right, .nav_right>ul").stop().fadeIn(300);
    });
    $(".mobile_close").on("click", () => {
        $(".nav_right, .nav_right>ul").stop().fadeOut(300);
    });
});

$(function () {
    $(window).on("resize", () => {
        if (window.innerWidth > 999) {
            $(".nav_right, .nav_right>ul").css("display", "flex");
        } else {
            $(".nav_right, .nav_right>ul").css("display", "none");
        }
    });
});

$(function () {
    $(".start").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content2").offset().top - 100 }, 500);
    });
});

$(function () {
    $(".box").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
        $(this).siblings().children(".answer").stop().slideUp();
        $(this).children(".answer").stop().slideToggle();
    });
});

$(function () {
    $(".filter ul li").on("click", function () {
        const value = $(this).text().toLowerCase();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        if (value === "all") {
            $(".card_container").show(300);
        } else {
            $(".card_container")
                .not("." + value)
                .hide(300);
            $(".card_container")
                .filter("." + value)
                .show(300);
        }
    });
});

$(function () {
    $(".img_container").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
    });
    $(".slick-dots li").text("");
});

$(function () {
    $(window).on("resize scroll", () => {
        let scrollValue = 0;
        scrollValue = $(document).scrollTop();
        // console.log(scrollValue);
        if (scrollValue > 100) {
            $(".to_top").stop().fadeIn(100);
        } else {
            $(".to_top").stop().fadeOut(100);
        }

        $(".nav_right a").removeClass("active");
        if (
            -1 < scrollValue &&
            scrollValue < $(".content2").offset().top - 150
        ) {
            $("#home").addClass("active");
        } else if (
            scrollValue < $(".content2").offset().top - 100 < scrollValue &&
            scrollValue < $(".content3").offset().top - 150
        ) {
            $("#about_us").addClass("active");
        } else if (
            scrollValue < $(".content3").offset().top - 100 < scrollValue &&
            scrollValue < $(".content4").offset().top - 200
        ) {
            $("#service").addClass("active");
        } else if (
            scrollValue < $(".content4").offset().top - 100 < scrollValue &&
            scrollValue < $(".content6").offset().top - 180
        ) {
            $("#portfolio").addClass("active");
        } else if (
            scrollValue < $(".content6").offset().top - 100 < scrollValue &&
            scrollValue < $(".content8").offset().top - 150
        ) {
            $("#team").addClass("active");
        } else if (scrollValue > $(".content7").offset().top - 50) {
            $("#contact").addClass("active");
        }
    });
});

$(function () {
    $("#home").on("click", () => {
        $("html").stop().animate({ scrollTop: 0 }, 500);
    });
    $("#about_us").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content2").offset().top - 100 }, 500);
    });
    $("#service").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content3").offset().top - 100 }, 500);
    });
    $("#portfolio").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content4").offset().top - 100 }, 500);
    });
    $("#team").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content6").offset().top - 100 }, 500);
    });
    $("#contact").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content8").offset().top - 100 }, 500);
    });
    $("#to_top").on("click", () => {
        $("html").stop().animate({ scrollTop: 0 }, 500);
    });
});

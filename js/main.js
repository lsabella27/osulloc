$(document).ready(function () {

    //mb slide
    const mb = new Swiper('.mb', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: true,
        },
        loop: true,
    });


    //slide - control
    $(".play").hide();

    //일시정지 pause 클릭했을 때 슬라이드(변수명)를 멈춰라
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });

    //재생버튼 클릭했을 때 슬라이드(변수명)를 재생해라
    $(".play").click(function () {
        mb.autoplay.start();
        $(".play").hide();
        $(".pause").show();
    })

    //news
    const news = new Swiper('.news', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        direction: "vertical",
    });

    //prd
    const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
        breakpoints: {
            300: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },

    });

    $(".prd_list li a img:nth-child(2)").hide();
    $(".prd_list li").mouseenter(function () {
        $(this).find("img:nth-child(2)").stop().fadeIn();
    });
    $(".prd_list li").mouseleave(function () {
        $(this).find("img:nth-child(2)").stop().fadeOut();
    });


    // teaware 탭 메뉴
    $(".tab_btn li").click(function () {
        // 탭 버튼 안에 있는 li를 클릭했을 때
        $(this).addClass("on").siblings().removeClass("on");
        let idx = $(this).index();
        // .tab_btn li 클릭한 요소 번호 찾아라

        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
        // 찾은 번호 페이드인하고 나머지 형제요소 페이드 아웃해라
    });


    // museum 아코디언 메뉴
    $(".museum_list li:nth-child(1)").addClass("active");
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active");
    });

    $(".museum_list li").mouseleave(function () {
        $(this).removeClass("active").siblings().removeClass("active");
    });

    // 예

});
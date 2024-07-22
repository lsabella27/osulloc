$(document).ready(function () {

    //dp2
    $(".depth2 , .dp2_bg").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".dp2_bg").stop().fadeIn();
    });

    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".dp2_bg").stop().fadeOut();
    });


    //search 검색영역
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });

    $(".search_close").click(function () {
        $(".search").fadeOut();
    });

    //site map 사이트 맵 영역
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").fadeOut();
    });

    // util 언어영역
    $(".language > ul").hide();
    $(".language").click(function () {
        $(".language i").toggleClass("active");
        $(".language > ul").stop().slideToggle();
    });

    //popup
    $(".popup i").click(function () {
        $(".popup").stop().slideUp();
    });

    //mdp2  모바일 사이트맵 영역
    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(this).find(".mdepth2").slideDown();
    });

    $(".mgnb_wrap").hide();
    $(".btn_mgnb").click(function () {
        $(".mgnb_wrap").slideDown();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").stop().slideUp();
    });

    $(".gotop").hide();
    // 스크롤을 100이상이 되었을 때
    // 맨위로가기 버튼이 fadeIn 되어라
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".gotop").fadeIn();
        }
        else {
            $(".gotop").fadeOut();
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000) {
            $("body").addClass("on");
        } else {
            $("body").removeClass("on");
        }
    })
    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    })
});
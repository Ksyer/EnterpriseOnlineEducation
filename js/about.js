/**
 * JS by WangYaoHua
 * 2020-06-26
 */

/**
 * nav-wrap
 */

var index = 0;

function navWrap() {
    $(".nav ul li").click(function () {
        index = $(this).index();
        // console.log(index);
        $(this).addClass("cur").siblings().removeClass("cur");

        // $(".fullpage .section").eq(index).addClass("active").siblings().removeClass("active");
    });
}

/**
 * fullPage
 */

function fullPage() {
    $(".fullpage").fullpage({
        navigation: true,
        anchors: ["p1", "p2", "p3", "p4", "p5", "p6"],
        menu: "#menu"
    });
}

$(function () {

    navWrap();

    fullPage();
})
/**
 * JS by WangYaoHua
 * 2020-06-25
 */

/**
 * topbar
 */

function topbar() {
    var boxTop = 500;
    // 页面滚动事件 
    $(window).scroll(function () {
        if ($(document).scrollTop() >= boxTop) {
            $(".box-top").fadeIn(300);
        } else {
            $(".box-top").fadeOut(300);
        }
    });

    // 点击boxTop盒子，返回顶部
    $(".box-top").click(function () {
        $("boty, html").stop().animate({
            scrollTop: 0
        });
    });

    // 鼠标经过电话盒子，显示box-mobile
    $(".topbar li:nth-child(3)").hover(function () {
        $(".topbar .box-mobile").toggle();
    });

    // 鼠标经过微信盒子，显示box-weixin
    $(".topbar li:nth-child(4)").hover(function () {
        $(".topbar .box-weixin").toggle();
    });
}

/**
 * fdnav
 */

function fdnav() {
    // 鼠标经过显示fdnav导航
    var time = '';
    $(".dropdown").hover(function () {
        clearTimeout(time);
        $(".fdnav").slideDown(200);
    }, function () {
        time = setTimeout(function () {
            $(".fdnav").slideUp(200);
        }, 100);
    });
    $(".fdnav").hover(function () {
        clearTimeout(time);
        $(".fdnav").slideDown(200);
    }, function () {
        time = setTimeout(function () {
            $(".fdnav").slideUp(200);
        }, 100);
    });
}

$(function () {
    topbar();
    fdnav();
})
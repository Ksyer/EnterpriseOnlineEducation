/**
 * JS for WangYaoHua
 * 2020-06-24
 */

/**
 * banner
 */

var imgArr = ["banner_wh_01.jpg", "banner_wh_02.jpg", "banner_wh_03.png"];
var count = 0; // 表示当前图片序号，从0开始
var myTimer = null;

function initUI() {
    $.each($(".focus ul li"), function (i, ele) {
        $(ele).css("background", "url(img/banner/wh/"+imgArr[i]+") no-repeat center top");
    });

    $(".focus ul li:first").css("display", "block");
}

function changeImg(index) {
    $(".focus .bd li").eq(count).fadeIn(1000).siblings("li").fadeOut('slow');     
    $(".focus .circle li").eq(count).addClass("current").siblings(".focus .circle li").removeClass("current");
}

function initEvent() {
    $(".focus ul").mouseenter(function () {
        stopPlay();
    });

    $(".focus ul").mouseleave(function () {
        autoPlay();
    });

   $(".focus .circle li").click(function () {
        window.clearInterval(myTimer);
        count = $(this).index();
        changeImg(count);
        autoPlay();
    });


    $(".arrow-l").click(function () {
        window.clearInterval(myTimer);
        count--;
        // if (count < 0) {
        //     count = imgArr.length-1;
        // }
        count = count < 0 ? imgArr.length - 1 : count;
        changeImg(count);
        autoPlay();
    });

    $(".arrow-r").click(function () {
        window.clearInterval(myTimer);
        count++;
        // if (count == imgArr.length) {
        //     count = 0;
        // }
        count = count > imgArr.length-1 ? 0 :count;
        changeImg(count);
        autoPlay();
    });
}

// 1. 自动播放
function autoPlay() {
    myTimer = setInterval(function () {
    count++;
    count = count > imgArr.length-1 ? 0 : count;  
    changeImg(count);
    }, 4000);
}

// 2. 暂停播放
function stopPlay() {
    window.clearInterval(myTimer);
}

/**
 * box-know
 */
function know() {
    // 默认显示第一个
    $(".know-con-l .player-con .player:first").show();
    $(".know-con-l .tag ul li:first span").show();

    $(".know-con-l .tag ul li").mouseover(function() {
        var index = $(this).index();
        $(".know-con-l .player-con .player").eq(index).show().siblings().hide();
        $(".know-con-l .tag ul li:nth-child("+(index+1)+") span").show().parent().siblings().find("span").hide();
    });
}


$(function() {
    initUI();
    autoPlay();
    initEvent(); 

    know();
})
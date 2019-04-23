$(function () {
    // 获取浏览器可视区域宽高
    var H = $(window).innerHeight() - $('.nav').innerHeight();
    var W = $(window).innerWidth();
    // 设置总屏幕高度
    $('.screen').height(H);
    // 设置每一屏高度
    $('.screen>ul>section').height(H);
    // 设置第二屏幕和第四个屏幕内每一个li的宽度
    $('.block-two .slide , .block-four .slide').width(W)

    // 给没一层上色
    var colors = ['#221236', 'white', '#221236', 'white', ''];
    $.each($('.screen>ul>section'), function (k, v) {
        $(v).css('background', colors[k]);
    });


    // 页面跳转到指定屏幕
    var hash = window.location.hash.slice(1);
    if (hash) sildeGo(hash);


    // 声明计算器,记录当前屏幕的索引,联动页面跳转
    var screenIndex = hash || 0;
    // 记录时间触发次数
    var wheelNumber = 0;
    // 监听鼠标滚轮滑动
    mouseWheel(window, function (down, e) {
        wheelNumber++;
        if (wheelNumber > 5) {
            wheelNumber = 0;
            if (down) {
                // 滚轮向下,页面向上
                if (screenIndex < 4) {
                    screenIndex++;
                    sildeGo(screenIndex);
                }
            } else {
                if (screenIndex > 0) {
                    screenIndex--;
                    sildeGo(screenIndex);
                }
            }
        } else {
            wheelNumber++;
        }
    })


    //  点击导航滑动到指定位置
    $('.nav>li').on('click', function () {
        var i = $(this).index();
        if (i < 4) {
            // 页面索引重置
            i++;
        }
        screenIndex = i;
        sildeGo(i);
    })

    // 下拉按钮
    $('.block-one .next').on('click',function(){
        $('.nav>li').eq(0).click();
    })

    // 封装滑动以及导航跟随
    function sildeGo(index) {
        $('.screen>ul').stop().animate({
            'top': -index * H
        });
        // 索引不为0可跟换高亮显示
        if (index != 0 && index < 5) {
            $('.nav>li').removeClass('now').eq(index - 1).addClass('now');
            if (index == 4) {
                $('.nav>li').eq(index).addClass('now');
            }
        }
    }


    // 第二屏幕的轮播
    var twoIndex = 0;
    var bapo = $('.block-two .right').css('background-position');
    var long = 1;
    $('.block-two .right').on('click', function () {
        if (twoIndex < 2) {
            twoIndex++;
            $('.block-two>ul').animate({
                'left': -twoIndex * W
            });
        }
    })

    $('.block-two .left').on('click', function () {
        if (twoIndex > 0) {
            twoIndex--;
            $('.block-two>ul').animate({
                'left': -twoIndex * W
            });
        }
    })
    setInterval(function(){
        $('.block-three .img-one1').fadeOut(1000).fadeIn(1000);
        $('.block-three .img-two2').fadeOut(1000).fadeIn(1000);
        $('.block-three .img-three3').fadeOut(1000).fadeIn(1000);
        $('.block-three .img-four4').fadeOut(1000).fadeIn(1000);
    },1000)



    // 第四屏幕轮播
    var flag = true;
    $('.block-four .right').on('click', function () {
        if(flag){
            flag = false;
            changeSlide(-1 * W, this, {
                'sleft': 78,
                'tleft': 0
            },function(){
                flag = true;
            });
        }
    })

    $('.block-four .left').on('click', function () {
        if(flag){
            
            flag = false;
            changeSlide(0, this, {
                'sleft': -78,
                'tleft': 0
            },function(){
                flag = true;
            })
        }
    });


    function changeSlide(target, obj, json,fn) {
        var that = this;
        
        $('.block-four>ul').animate({
            'left': target
        })
        $(obj).siblings().find('span').animate({
            'left': json['sleft']
        }, function () {
            $(obj).find('span').animate({   
                'left': json['tleft']
            },function(){
                fn && fn();
            });
        });
    }

    // 开场动画
    setTimeout(function () {
        $('.welcome .box').animate({
            'top': 0
        }).find('.text').slideDown(function () {
            $('.welcome').delay(2000).slideUp();
        });
    }, 4000);

    var DBclick = false;
    $('.welcome').on('dblclick', function (e) {
            $(this).slideUp();
    })
    

})
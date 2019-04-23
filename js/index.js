$(function () {
    // 引入头部底部
    $('#header').load('../html/header.html');
    $('#footer').load('../html/footer.html');
    $('#rock').load('../html/goTop.html');

    // 轮播图部分
    var n = 0;
    // 节流阀
    var flag = true;
    // 点部分
    $('.banner .screen .border-M>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.banner .screen>ul>li').fadeOut().eq(index).fadeIn();
        // 点击序号赋值计数器
        n = index;
    })

    // 点击部分
    $('.banner .screen .right').on('click', function () {
        if (flag) {
            flag = false;
            if (n >= 2) {
                n = 0;
            } else {
                n++;
            }
            $('.banner .screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.banner .screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })

    $('.banner .screen .left').on('click', function () {
        if (flag) {
            flag = false;
            if (n <= 0) {
                n = 2;
            } else {
                n--;
            }
            $('.banner .screen .border-M>li').removeClass('active').eq(n).addClass('active');
            $('.banner .screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })

    // 公司简介轮播图

    var m = 0;
    $('.our-works .company-line>li').on('click', function () {
        // cirClick('active', '.area .company')
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.our-works .area .company').fadeOut().eq(index).fadeIn();
        m = index;
    })



     $('.our-works .arrow .right').on('click', function () {
         if (flag) {
             flag = false;
             if (m >= 5) {
                 m = 0;
             } else {
                 m++;
             }
             $('.our-works .company-line>li').removeClass('active').eq(m).addClass('active');
             $('.our-works .area .company').fadeOut().eq(m).fadeIn(function () {
                 flag = true;
             });
         }
     })
   


    $('.our-works .arrow .left').on('click', function () {
        if (flag) {
            flag = false;
            if (m <= 0) {
                m = 5;
            } else {
                m--;
            }
            $('.our-works .company-line>li').removeClass('active').eq(m).addClass('active');
            $('.our-works .area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })



    // 公司产品轮播图
    var k = 0;
    $('.about-company .company-line>li').on('click', function () {
        // cirClick('active', '.area .company')
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.about-company  .area .company').fadeOut().eq(index).fadeIn();
        k = index;
    })



     $('.about-company .arrow .right').on('click', function () {
         if (flag) {
             flag = false;
             if (k >= 5) {
                 k = 0;
             } else {
                 k++;
             }
             $('.about-company .company-line>li').removeClass('active').eq(k).addClass('active');
             $('.about-company .area .company').fadeOut().eq(k).fadeIn(function () {
                 flag = true;
             });
         }
     })
   


    $('.about-company .arrow .left').on('click', function () {
        if (flag) {
            flag = false;
            if (k <= 0) {
                k = 5;
            } else {
                k--;
            }
            $('.about-company .company-line>li').removeClass('active').eq(k).addClass('active');
            $('.about-company .area .company').fadeOut().eq(k).fadeIn(function () {
                flag = true;
            });
        }
    })


    // 业务范围手风琴
    // li添加事件委托
    $('.business>li').on('click',function(e){
        // 如果触发的直接事件源是图片
        if(e.toElement == $(this).find('img')[0]||e.toElement == $(this).find('.closed')[0]){
            // 切换类名达到切换效果
            $(this).siblings().removeClass('active').end().toggleClass('active');
           

        }
    })



    // 团队介绍轮播图
    //左右焦点
    $('.team-screen>ul').append($('.team-screen>ul>li').eq(0).clone());
    var x = 0;
    var y = 0;
    $('.team-ol>.right').on('click',function(){
        if(flag){
            flag = false;
        if(x>2){
            x=0;
            $('.team-screen>ul').css({'left':0});
        }
        x++;
        y++;
        if(y>2){
            y=0;
        }
        var nowPos = $('.team-screen>ul').offset().left;
        $('.team-ol .border-M>li').removeClass('active').eq(y).addClass('active');
        $('.team-screen>ul').animate({'left':nowPos+200}).animate({'left':-x*$('.team-screen>ul>li').innerWidth()},'slow',function(){
            flag = true;
        });
    }
    })
     

    $('.team-ol>.left').on('click',function(){
        if(flag){
            flag = false;
        if(x<=0){
            x=3;
            $('.team-screen>ul').css({'left':-x*$('.team-screen>ul>li').innerWidth()});
        }
        x--;
        y--;
        if(y<0){
            y=2;
        }
        var nowPos = $('.team-screen>ul').offset().left-200;
        $('.team-ol .border-M>li').removeClass('active').eq(y).addClass('active');
        $('.team-screen>ul').animate({'left':nowPos-200},'slow').animate({'left':-x*$('.team-screen>ul>li').innerWidth()},'slow',function(){
            flag = true;
        });
    }
    })
    

    // setInterval(function(){
    //     $('.team-ol .right').click();
    // },3000);

})
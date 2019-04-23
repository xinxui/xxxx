$(function () {
    $('#header').load('../html/header.html');
    $('#footer').load('../html/footer.html');
    $('#rock').load('../html/goTop.html');




    // 页面加载根据页面地址数据加载指定内容

    var sendData = /type=([a-zA-Z0-9]*)/.exec(window.location.search.slice(1))[1];
    console.log(sendData)
    $.ajax({
        type: 'get',
        url: '../js/article.php',
        data: {
            type: sendData
        },
        success: function (data) {
            var data = data.data;
            $('.center-bg>.title>h1').html(data.typeTitle);
            $('.center-bg>.title>p').html(data.typeEntitle);
            $('.top>p').html(data.title);
            $('.title-img>img').attr('src', data.coverImg);
            $('.top .data').html(data.creatAt);
            $('.user').html(data.creatByFullName);
            $('.content-txt').html(data.content);
        }
    })
    /* 点赞 */
    $('.pen>i').mousemove(function () {
        $('span').stop().fadeIn(); //淡入
        //划下
        $('.pen+p').stop().fadeIn();
    })

    $('.pen>i').mouseout(function () {
        $('span').stop().fadeOut(); //淡出
        //划上
        $('.pen+p').stop().fadeOut();
    })
    var n = 0;
    $('.pen>i').on('click', function () {
        n++;
        $('span').html('喜欢' + (n));
    })
})
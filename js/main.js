$(document).ready(function () {
    var timeInterval, tabCount = 0, currnetIndex = 1;
    tabCount = $('ul#tabs').find('li a').length;
    var tabContentObj = $('.tabContent');
    changeTabIndex();
    timeInterval = setInterval(function () { changeTabIndex(); }, 10 * 1000);

    function changeTabIndex() {
        if (currnetIndex > tabCount) {
            currnetIndex = 1;
        }
        tabContentObj.hide();
        $('ul#tabs').find('li.selected').removeClass('selected');
        var currentAncorObj = $('ul#tabs').find('li a').eq(currnetIndex - 1);
        currentAncorObj.parent().addClass('selected');
        $(currentAncorObj.attr('href')).show();
        currnetIndex++;
    };

    $('#tabs li').mouseenter(function () {
        clearInterval(timeInterval);
    }).mouseleave(function () {
        timeInterval = setInterval(function () { changeTabIndex(); }, 10 * 1000);
    });

    $('#tabs li a').click(function () {
        event.preventDefault();
        tabContentObj.hide();
        $('ul#tabs').find('li.selected').removeClass('selected');
        var currentAncorObj = $(this);
        currnetIndex = $('ul#tabs').find('li a').index($(this)) + 1;
        currentAncorObj.parent().addClass('selected');
        $(currentAncorObj.attr('href')).show();
        currnetIndex++;

        //return false;
    });

    $('.star-active').hover(function () {
       $('.hint').toggleClass('active-hint');
    });

    $('.close-block').click(function () {
       $('.info-block-map').css('display', 'none');
    });

    $('.burger-btn').click(function () {
        $('.background-dark').addClass('open-background');
        $('.wrapper-navigation').addClass('open-menu');
        $('.wrapper-burger-btn-close').css('display', 'flex');
    });
    $('.burger-btn-close').click(function () {
        $('.background-dark').removeClass('open-background');
        $('.wrapper-navigation').removeClass('open-menu');
        $('.wrapper-burger-btn-close').css('display', 'none');
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });



    if ($(window).width() <= 360) {
        $('.chevron-down').click(function () {
            $(this)
                .toggleClass('chevron-up')
                .parent()
                .find('.info-card')
                .toggleClass('open-info-card');
        });
    }
});
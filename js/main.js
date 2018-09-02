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
});
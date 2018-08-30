function initMap() {
    var mapOptions = {
        zoom: 17,
        center: { lat: 50.46744, lng: 30.626763 },
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        draggable: true
    };

    var mapElement = document.getElementById('search-map-container');
    var map = new google.maps.Map(mapElement, mapOptions);
    var point = new google.maps.LatLng(50.46744, 30.629763);

    new google.maps.Marker({
        position: point,
        map: map
    });
}
$(document).ready(function () {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
            $('.header-nav').addClass('fixed');
        } else {
            $('.header-nav').removeClass('fixed');
        }
    });
});
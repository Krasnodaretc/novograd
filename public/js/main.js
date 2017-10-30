$(document).ready( function () {
   $('.special__slider').slick({
       slideToShows: 1,
       slidesToScroll: 1,
       dots: true,
       arrows: true
   });


    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [43.585907, 39.723471],
            zoom: 18
        });

        myPlacemark = new ymaps.Placemark([43.585907, 39.723471], {
            hintContent: 'НовоГрадЪ',
            preset: 'islands#redDotIcon',
            balloonContent: 'НовоГрадЪ, строительная компания'
        });

        myMap.geoObjects.add(myPlacemark);
    }
});
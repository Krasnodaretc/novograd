$(document).ready( function () {
   $('.special__slider').slick({
       slideToShows: 1,
       slidesToScroll: 1,
       dots: true,
       arrows: true
   });

   $('.news__slider').slick({
     slideToShows: 1,
     slidesToScroll: 1,
     dots: true,
     arrows: false,
     autoplay: false,
     infinite: false
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

    // MODAL
    var modal = $('.modal');

    $('.contact__order').click( function () {
      modal.addClass('opened');
    });

    modal.on('click', 'div', function (e) {
      e.stopPropagation();
      var el = $(e.currentTarget);

      if ( el.hasClass('modal__close') || el.hasClass('modal__back') || el.hasClass('modal__content') ) {
        modal.removeClass('opened');
      }
    });


  // MESSEGER

  $('.order__button').click( function () {
    var order = $(this).parent('.order');
    var name = order.find('input[name="name"]');
    var phone = order.find('input[name="phone"]');

    var valid = [];

    [name, phone].forEach( function (el) {
      if (
        el.val()
        && el.val() !== ''
        && el.val() !== ' ' )
      {
        el.data('valid', true);
        el.removeClass('warn')
      }  else {
        el.data('valid', false);
        el.addClass('warn');
      }

      valid.push( el.data('valid') );

    });

    if (valid[0] === true && valid[0] == valid[1]) {
      name = name.val();
      phone = phone.val();
      alert('Звонок заказан! Наш менеджер скоро перезвонит Вам, ' + name);
    }

  });

});

function init() {
    var SKOROSTAVTO = 60
    var SKOROSTSAMOLETA = 900,
        myMap = new ymaps.Map('map', {
            center: [40.389420, 71.783009],
            zoom: 9,
            controls: []
        }),
        routePanelControl = new ymaps.control.RoutePanel({
            options: {
                showHeader: true,
                title: 'Маршрут'
            }
        }),
        zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: 'small',
                float: 'none',
                position: {
                    bottom: 145,
                    right: 10
                }
            }
        });
    routePanelControl.routePanel.options.set({
        types: {auto: true}
    });
    myMap.controls.add(routePanelControl).add(zoomControl);
    routePanelControl.routePanel.getRouteAsync().then(function (route) {
        route.model.setParams({results: 1}, true);
        route.model.events.add('requestsuccess', function () {
            var activeRoute = route.getActiveRoute();
            if (activeRoute) {
                var length = route.getActiveRoute().properties.get("distance");
                var price = calculate(Math.round(length.value / 1000));
                if (price < 1) {
                    var price = 'менее часа';
                } else {
                    var price = (price.toFixed(0) + ' ч');
                }
                var pricea = calculatee(Math.round(length.value / 1000));
                if (pricea < 1) {
                    var pricea = 'менее часа';
                } else {
                    var pricea = (pricea.toFixed(0) + ' ч');
                }
                var balloonContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<span>Расстояние: ' + length.text + '.</span><br/>' +
                        '<span style="font-weight: bold; font-style: italic">Примерное время полёта (без пересадок): ' + price + '.</span>' +
                        '<br><span style="font-weight: bold; font-style: italic">Примерное время на автомобиле: ' + pricea + '.</span><br>'+
                        '<a href="#modal" class="fess">КНОПКА ЕЖЖИ</a>'
                        );
                route.options.set('routeBalloonContentLayout', balloonContentLayout);
                activeRoute.balloon.open();
            }
        });

    });
    function calculate(routeLength) {
        return Math.max(routeLength / SKOROSTSAMOLETA);
    }
    function calculatee(routeLength) {
        return Math.max(routeLength / SKOROSTAVTO);
    }
}



$(document).ready(function () {
    $(window).on('scroll.myEvent', function() {
        var scroll_picca =jQuery('.rl-block__review').offset().top;
        if (jQuery(this).scrollTop() > scroll_picca)
        {
             $(window).off('scroll.myEvent');
      ymaps.ready(init);
        }
               
       });
});
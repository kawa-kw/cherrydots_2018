// /*
// * jquery-backgroundMove master by sameera liyanage
// * License MIT
// $('element').backgroundMove();
// */
// (function($){
//     $.fn.backgroundMove=function(options){
//             var defaults={
//             movementStrength:'50'
//         },
//         options=$.extend(defaults,options);
//
//          var $this = $(this);
//
//            var movementStrength = options.movementStrength;
//             var height = movementStrength / $(window).height();
//             var width = movementStrength / $(window).width();
//             $this.mousemove(function(e){
//                       var pageX = e.pageX - ($(window).width() / 2);
//                       var pageY = e.pageY - ($(window).height() / 2);
//                       var newvalueX = width * pageX * -1 - 25;
//                       var newvalueY = height * pageY * -1 - 50;
//                       $this.css("background-position", newvalueX+"px     "+newvalueY+"px");
//             });
//
//         }
// })(jQuery);
//
export default function moveBcgLayer(bcg, layer, movementStrength){
    var window = $(window);
    var dx = 0 // number of px to move layer on X axis
    var dy = 0 // number of px to move layer on Y axis
    var factor = 1 / (30 * movementStrength)

    bcg.mousemove(function( event ) {
        var newX = window.width() / 2 - event.clientX
        var newY = window.height() / 2 - event.clientY

        console.log('moveBcgLayer działa', newX, newY)
    });

    function moveSingleLayer(){
        dx += ((newX * (-1)) - dx) * factor
        dy += ((newY * (-1)) - dy) * factor

        translate = 'translate(' + dx + 'px, ' + dy + 'px) scale(1.1)';

        layer.css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveSingleLayer);
        console.log('moveSingleLayer działa')
    }

}

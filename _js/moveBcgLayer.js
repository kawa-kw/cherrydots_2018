export default function moveBcgLayer(bcg, layer, movementStrength){
    var window = $(document);
    var dx = 0 // number of px to move layer on X axis
    var dy = 0 // number of px to move layer on Y axis
    var factor = 1 / (3 * movementStrength)

    bcg.mousemove(function( event ) {
        var newX = window.width() / 2 - event.clientX
        var newY = window.height() / 2 - event.clientY

        function moveSingleLayer(){
            if ( Math.abs(dx) >= 100 ){
                dx = 0;
            } else {
                dx = (newX - dx) * factor
            }

            if ( Math.abs(dy) >= 50 ){
                dy = 0;
            } else {
                dy = (newY - dy) * factor
            }

            var translate = 'translate(' + dx + 'px, ' + dy + 'px)';

            layer.css({
                '-webit-transform': translate,
                '-moz-transform': translate,
                'transform': translate
            });
        }

        moveSingleLayer();
    });
}

export default function moveBcgLayer(bcg, layer, movementStrength){
    var window = $(document);
    var dx = 0 // number of px to move layer on X axis
    var dy = 0 // number of px to move layer on Y axis
    var factor = 1 / (30 * movementStrength)

    bcg.mousemove(function( event ) {
        var newX = window.width() / 2 - event.clientX
        var newY = window.height() / 2 - event.clientY

        function moveSingleLayer(){
            dx += (newX - dx) * factor
            dy += (newY - dy) * factor

            if ( Math.abs(dx) >= 50 ){
                dx = dx;
                console.log('juz x jest max')
            }

            if ( Math.abs(dy) >= 50 ){
                dy = dy;
                console.log('juz y jest max')
            }

            console.log(dx, dy)

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

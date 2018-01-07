export default function runLogoAnimation(){

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $fullLogos = $('#sketch > *, #logo-border, #logo-color')
    var $logoSketch = $('#sketch');
    var $base1 = $('#base1');
    var $base2 = $('#base2');
    var $base3 = $('#base3');
    var $lineSet1 = $('#line2, #line20, #line22, #line14');
    var $lineSet2 = $('#line4, #line30, #line12, #line15');
    var $lineSet3 = $('#line10, #line23, #line24, #line16');
    var $lineSet4 = $('#line13, #line27, #line29, #line21');
    var $lineSet5 = $('#line1, #line3, #line5, #line25');
    var $lineSet6 = $('#line9, #line19, #line28');
    var $lineSet7 = $('#line6, #line7, #line8, #line31');
    var $lineSet8 = $('#line11, #line17, #line18, #line26');
    var $logoBorder = $('#logo-border');
    var $logoColor = $('#logo-color');

    tl.to($fullLogos, 0, {opacity: 0})
        .to($base1, 1, {opacity: 1, ease: Linear.easeOut})
        .to($base2, 1, {opacity: 1, ease: Linear.easeOut})
        .to($base3, 1, {opacity: 1, ease: Linear.easeOut})
        .to($lineSet1, .9, {opacity: 1, ease: Linear.easeOut}, '-=.1')
        .to($lineSet2, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet3, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet4, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet5, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet6, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet7, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .to($lineSet8, .9, {opacity: 1, ease: Linear.easeOut}, '-=.3')
        .addLabel('logoBorder', '+=2')
        .to($logoBorder, 2, {opacity: 1, ease: Linear.easeOut}, 'logoBorder')
        .addLabel('logoColor', '+=2.5')
        .to($logoColor, 2, {opacity: 1, ease: Linear.easeOut}, 'logoColor')
        .addLabel('sketchFade', '-=.5')
        .to($logoBorder, .5, {opacity: 0})
        .to($logoSketch, 3, {opacity: 0}, 'sketchFade')
};

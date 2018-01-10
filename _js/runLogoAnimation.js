export default function runLogoAnimation(){

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    var width = $(window).width()

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $fullLogos = $('#sketch > *, #logo-border, #logo-color, #subtitle')
    var $bgcColorLayers = $('#dev-bcg-intro-color > *, .js-intro-bcg')
    var $bcgColor1 = $('#dev-bcg-intro-color #bcg-1, #dev-bcg-intro-color #bcg-1-float-1, #dev-bcg-intro-color #bcg-1-float-2, #dev-bcg-intro-color #bcg-1-float-3, #dev-bcg-intro-color #bcg-1-float-4, #dev-bcg-intro-color #bcg-1-float-5')
    var $bcgColor2 = $('#dev-bcg-intro-color #bcg-2, #dev-bcg-intro-color #bcg-2-float-1, #dev-bcg-intro-color #bcg-2-float-2, #dev-bcg-intro-color #bcg-2-float-3, #dev-bcg-intro-color #bcg-2-float-4, #dev-bcg-intro-color #bcg-2-float-5')
    var $bcgColor3 = $('#dev-bcg-intro-color #bcg-3, #dev-bcg-intro-color #bcg-3-float-1, #dev-bcg-intro-color #bcg-3-float-2, #dev-bcg-intro-color #bcg-3-float-3')
    var $bcgColor4 = $('#dev-bcg-intro-color #bcg-4')
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
        .to($bgcColorLayers, 0, {scale: 0, transformOrigin: 'center center'})
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
        .addLabel('logoBorder', '+=1')
        .to($logoBorder, 1, {opacity: 1, ease: Linear.easeOut}, 'logoBorder')
        .addLabel('logoColor', '+=1.5')
        .to($logoColor, 1, {opacity: 1, ease: Linear.easeOut}, 'logoColor')
        .addLabel('sketchFade', '-=.5')
        .to($logoBorder, .5, {opacity: 0})
        .to($logoSketch, 2, {opacity: 0}, 'sketchFade')
        .to($('#subtitle'), .8, {opacity: 1}, '-=1.6')
        .to($bcgColor4, 0.2, {scale: 1, ease: Back.easeOut.config(1.4)}, '-=1.2')
        .to($bcgColor3, 0.3, {scale: 1, ease: Back.easeOut.config(1.4)}, '-=1.1')
        .to($bcgColor2, 0.3, {scale: 1, ease: Back.easeOut.config(1.4)}, '-=1')
        .to($bcgColor1, 0.3, {scale: 1, ease: Back.easeOut.config(1.4)}, '-=.9')
        .to($('.js-intro-bcg'), 0.4, {scale: 1, ease: Back.easeOut.config(1.4)}, '-=.8')
        .to($('#dev-bcg-intro'), 0, {opacity: 0}, '-=1.2')
        .to($('#bcg-3-float-3'), 100, {x:'+=1000', y:'+=500'}, '-=.2')
};

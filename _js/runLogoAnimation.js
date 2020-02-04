export default function runLogoAnimation(){

    $('.js-intro-bcg-shapes').show().removeClass('hidden')
    $('.js-main').removeClass('main--start')

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    let tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    const $fullLogos = $('#sketch > *, #logo-border, #logo-color, #subtitle')
    const $bgcColorLayers = $('#dev-bcg-intro-color > *')
    const $bcgColor1 = $('#dev-bcg-intro-color #bcg-1, #dev-bcg-intro-color #bcg-1-float-1, #dev-bcg-intro-color #bcg-1-float-2, #dev-bcg-intro-color #bcg-1-float-3, #dev-bcg-intro-color #bcg-1-float-4, #dev-bcg-intro-color #bcg-1-float-5')
    const $bcgColor2 = $('#dev-bcg-intro-color #bcg-2, #dev-bcg-intro-color #bcg-2-float-1, #dev-bcg-intro-color #bcg-2-float-2, #dev-bcg-intro-color #bcg-2-float-3, #dev-bcg-intro-color #bcg-2-float-4, #dev-bcg-intro-color #bcg-2-float-5')
    const $bcgColor3 = $('#dev-bcg-intro-color #bcg-3, #dev-bcg-intro-color #bcg-3-float-1, #dev-bcg-intro-color #bcg-3-float-2, #dev-bcg-intro-color #bcg-3-float-3')
    const $bcgColor4 = $('#dev-bcg-intro-color #bcg-4')
    const $blueBcg = $('.js-intro-bcg');
    const $underBcg = $('.js-under-bcg-shapes');
    const $logoSketch = $('#sketch');
    const $base1 = $('#base1');
    const $base2 = $('#base2');
    const $base3 = $('#base3');
    const $lineSet1 = $('#line2, #line20, #line22, #line14');
    const $lineSet2 = $('#line4, #line30, #line12, #line15');
    const $lineSet3 = $('#line10, #line23, #line24, #line16');
    const $lineSet4 = $('#line13, #line27, #line29, #line21');
    const $lineSet5 = $('#line1, #line3, #line5, #line25');
    const $lineSet6 = $('#line9, #line19, #line28');
    const $lineSet7 = $('#line6, #line7, #line8, #line31');
    const $lineSet8 = $('#line11, #line17, #line18, #line26');
    const $logoBorder = $('#logo-border');
    const $logoColor = $('#logo-color');

    tl.to($fullLogos, 0, {opacity: 0})
        .to($blueBcg, 0, {opacity: 0})
        .to($underBcg, 0, {opacity: 0})
        .to($bgcColorLayers, 0, {opacity: 0, scale: 0, transformOrigin: 'center center'})
        .to($base1, .4, {opacity: 1, ease: Linear.easeOut})
        .to($base2, .4, {opacity: 1, ease: Linear.easeOut})
        .to($base3, .4, {opacity: 1, ease: Linear.easeOut})
        .to($lineSet1, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet2, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet3, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet4, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet5, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet6, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet7, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .to($lineSet8, .5, {opacity: 1, ease: Linear.easeOut}, '-=.2')
        .addLabel('logoBorder', '+=.6')
        .to($logoBorder, .5, {opacity: 1, ease: Linear.easeOut}, 'logoBorder')
        .addLabel('logoColor', '+=.8')
        .to($logoColor, .5, {opacity: 1, ease: Linear.easeOut}, 'logoColor')
        .addLabel('sketchFade', '-=.5')
        .to($logoBorder, .3, {opacity: 0})
        .to($logoSketch, 1, {opacity: 0}, 'sketchFade')
        .to($('#subtitle'), .5, {opacity: 1}, '-=1.6')
        .to($bcgColor4, .1, {opacity: 1, scale: 1, ease: Back.easeOut.config(1.4)}, '-=.4')
        .to($bcgColor3, .2, {opacity: 1, scale: 1, ease: Back.easeOut.config(1.4)}, '-=.3')
        .to($bcgColor2, .2, {opacity: 1, scale: 1, ease: Back.easeOut.config(1.4)}, '-=.2')
        .to($bcgColor1, .2, {opacity: 1, scale: 1, ease: Back.easeOut.config(1.4)}, '-=.1')
        .to($blueBcg, .2, {opacity: 1})
        .to($underBcg, .1, {opacity: 1})
        .to($('#dev-bcg-intro'), 0, {opacity: 0}, '-=.4')
        .to($('#bcg-3-float-3'), 100, {x:'+=1000', y:'+=500'}, '-=.2')
};

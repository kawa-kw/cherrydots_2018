import runLogoAnimation from './runLogoAnimation';
import moveBcgLayer from './moveBcgLayer';

$(document).ready(() => {

    runLogoAnimation();
    moveBcgLayer($(window), $('#dev-bcg-intro-color #bcg-1'), 6);
    moveBcgLayer($(window), $('#dev-bcg-intro-color #bcg-2'), 8);
    moveBcgLayer($(window), $('#dev-bcg-intro-color #bcg-3'), 10);
    moveBcgLayer($(window), $('#dev-bcg-intro-color #bcg-4'), 12);
    console.log('animacja działa? działa!');
});

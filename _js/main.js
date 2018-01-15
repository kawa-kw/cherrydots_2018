import runLogoAnimation from './runLogoAnimation';
import moveBcgLayer from './moveBcgLayer';

$(document).ready(() => {

    runLogoAnimation();
    moveBcgLayer($(window), $('#dev-bcg-intro-color #bcg-1'), 1);
    console.log('animacja działa? działa!');
});

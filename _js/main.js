import runLogoAnimation from './runLogoAnimation';
import moveBcgLayer from './moveBcgLayer';

$(document).ready(() => {

    runLogoAnimation();
    moveBcgLayer($('body'), $('#dev-bcg-intro-color #bcg-1'), 20);
    moveBcgLayer($('body'), $('#dev-bcg-intro-color #bcg-2'), 20);
    moveBcgLayer($('body'), $('#dev-bcg-intro-color #bcg-3'), 30);
    console.log('animacja działa? działa!');
});

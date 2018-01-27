import runLogoAnimation from './runLogoAnimation';
import moveBcgLayer from './moveBcgLayer';

$(document).ready(() => {

    runLogoAnimation();
    moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-1'), 10);
    moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-2'), 10);
    moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-3'), 30);
    console.log('animacja działa? działa!');
});
